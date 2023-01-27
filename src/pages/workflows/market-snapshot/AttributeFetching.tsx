import React, { useEffect } from 'react';
import { useMarketSnapshotContext } from '.';
import DotsLoader from '../../../components/DotsLoader';
import {
	getAttributes,
	// SNAPSHOT_RESEARCH_TOPIC,
} from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';

const AttributeFetching = () => {
	const { onNext } = useMarketSnapshotContext();
	const dispatch = useAppDispatch();
	const {
		recommendedAttributes,
		otherAttributes,
		attributesFetching,
		researchTopic,
	} = useAppSelector((s) => s.marketSnapshot);

	useEffect(() => {
		dispatch(getAttributes({ query: researchTopic ?? '' }));
		// // Save research topic to localStorage
		// localStorage.setItem(SNAPSHOT_RESEARCH_TOPIC, researchTopic ?? '');
	}, []);

	useEffect(() => {
		if (recommendedAttributes && otherAttributes && !attributesFetching) {
			onNext && onNext(3, true);
		}
	}, [recommendedAttributes, otherAttributes, attributesFetching]);

	return (
		<div className="w-full">
			<div className="flex flex-col items-center w-full mt-20">
				<DotsLoader className="mb-7" />

				<h3 className="mb-3 text-xl font-semibold">
					Please wait, it may take 30 secs
				</h3>
				{/* <p className="text-base font-regular">
					Fetching details from database
				</p> */}
			</div>
		</div>
	);
};

export default AttributeFetching;
