import { useEffect } from 'react';
import { useMarketSnapshotContext } from '.';
import Alert from '../../../components/Alert';
import InfoIcon from '../../../components/icons/Info';
import { setSelectedAttributes } from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import ChipContainer from './ChipContainer';

const AttributeSelection = () => {
	const { onAllowNext } = useMarketSnapshotContext();
	const dispatch = useAppDispatch();
	const { recommendedAttributes, otherAttributes, selectedAttributes } =
		useAppSelector((s) => s.marketSnapshot);

	const handleOnChipSelect = (value: string, selected: boolean) => {
		if (selected) {
			dispatch(
				setSelectedAttributes([...(selectedAttributes ?? []), { value }])
			);
		} else {
			dispatch(
				setSelectedAttributes(
					(selectedAttributes ?? []).filter((a) => a.value !== value)
				)
			);
		}
	};

	useEffect(() => {
		const selected = selectedAttributes?.map((a) => a.value);
		const recommendedSelected = recommendedAttributes?.some((a) =>
			selected?.includes(a.value)
		);

		if (
			selectedAttributes &&
			selectedAttributes.length >= 3 &&
			recommendedSelected
		) {
			onAllowNext(true);
		} else {
			onAllowNext(false);
		}
	}, [selectedAttributes]);

	return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
        <h3 className="flex flex-row items-center gap-3 mb-6 text-xl font-semibold">
          Recommended attributes
          <InfoIcon />
        </h3>
        <ChipContainer
          className="mb-8"
          chips={recommendedAttributes ?? []}
          selected={selectedAttributes?.map((a) => a.value) ?? []}
          onChipSelect={handleOnChipSelect}
        />

        <h3 className="flex flex-row items-center gap-3 mb-2 text-xl font-semibold">
          Other attributes
          <InfoIcon />
        </h3>
        <p className="mb-6 text-base">
          These attributes may not always be relevant and could affect report
          quality
        </p>

        <ChipContainer
          chips={otherAttributes ?? []}
          selected={selectedAttributes?.map((a) => a.value) ?? []}
          onChipSelect={handleOnChipSelect}
          className="mb-14"
        />

        {selectedAttributes === null || selectedAttributes!.length < 3 ? (
          <Alert type="default" message="Select at least 3 attributes" />
        ) : null}
      </div>
    </div>
  );
};

export default AttributeSelection;
