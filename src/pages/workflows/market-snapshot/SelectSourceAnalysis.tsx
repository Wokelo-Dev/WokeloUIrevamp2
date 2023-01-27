import { useEffect, useState } from 'react';
import { useMarketSnapshotContext } from '.';
import Alert from '../../../components/Alert';
import Expandable from '../../../components/Expandable';
import FileDragAndDrop from '../../../components/FileDragAndDrop';
import BCGIcon from '../../../components/icons/BCG';
import ChevronDownIcon from '../../../components/icons/ChevronDown';
import FileIcon from '../../../components/icons/File';
import FoldedIcon from '../../../components/icons/Folded';
import MemoForbes from '../../../components/icons/Forbes';
import InfoIcon from '../../../components/icons/Info';
import MediumIcon from '../../../components/icons/Medium';
import TechCrunchIcon from '../../../components/icons/TechCrunch';
import UploadIcon from '../../../components/icons/Upload';
import WorldIcon from '../../../components/icons/World';
import Input from '../../../components/Input';
import OptionChoice from '../../../components/OptionChoice';
import {
	addSource,
	removeSource,
	setOtherSources,
	setWokeloSources,
} from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import SourceEntry from './SourceEntry';
import bcgImg from '../../../assets/BCG.png';
import bloombergImg from '../../../assets/Bloomberg.png';
import gartnerImg from '../../../assets/Gartner.png';
import mcKinseyImg from '../../../assets/McKinsey.png';
import techCrunchImg from '../../../assets/TechCrunch.png';

import cnbcImg from '../../../assets/CNBC.png';
import mediumImg from '../../../assets/Medium.png';
import reutersImg from '../../../assets/Reuters.png';
import wallStreetJournalImg from '../../../assets/WallStreetJournal.png';
import { NotificationService } from "../../../lib/notification-service";
import yahooFinanceImg from '../../../assets/YahooFinance.png';

const SelectSourceAnalysis = () => {
	const { onAllowNext } = useMarketSnapshotContext();
	const dispatch = useAppDispatch();
	const { sources, wokeloSources, otherSources } = useAppSelector(
		(s) => s.marketSnapshot
	);
	const [expanded, setExpanded] = useState(false);
	const [url, setUrl] = useState('');

	const handleOnAddUrl = () => {
		if(url.startsWith('https'))
		dispatch(addSource({ name: url, type: 'website' }));
		else {
			NotificationService.error('Invalid URL entered')
		}
		setUrl('');
	};

	const handleRemoveSource = (source: {
		name: string;
		type: 'file' | 'website';
	}) => {
		dispatch(removeSource(source));
	};

	useEffect(() => {
		onAllowNext(
			wokeloSources ||
				otherSources ||
				((sources && sources.length > 0) ?? false)
		);
	}, [wokeloSources, otherSources, sources]);

	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex flex-col items-start w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
				<h3 className="mb-4 text-xl font-semibold">
					Select Sources 
				</h3>

				<OptionChoice
					selected={wokeloSources}
					className="items-start w-full mb-6"
					onChange={(e) => dispatch(setWokeloSources(e))}
				>
					<div className="flex flex-row items-start justify-between w-full">
						<div className="flex flex-col">
							<h4 className="font-semibold">Wokelo Recommendations</h4>
							<div className="flex flex-row items-center gap-2">
								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={bcgImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={bloombergImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={gartnerImg} className="w-full h-auto" />
								</span>

								<span className="h-=10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={mcKinseyImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={techCrunchImg} className="w-full h-auto" />
								</span>

								<span className="text-xs">100+ Sources</span>
							</div>
						</div>

						<InfoIcon />
					</div>
				</OptionChoice>

				<OptionChoice
					selected={otherSources}
					className="flex flex-row items-start w-full mb-6"
					onChange={(e) => dispatch(setOtherSources(e))}
				>
					<div className="flex flex-row items-start justify-between w-full">
						<div className="flex flex-col">
							<h4 className="font-semibold">Other sources from web</h4>
							<div className="flex flex-row items-center gap-2">
								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={cnbcImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={mediumImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img src={reutersImg} className="w-full h-auto" />
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img
										src={wallStreetJournalImg}
										className="w-full h-auto"
									/>
								</span>

								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm shadow-gray-300/30">
									<img
										src={yahooFinanceImg}
										className="w-full h-auto"
									/>
								</span>

								<span className="text-xs">100+ Sources</span>
							</div>
						</div>

						<InfoIcon />
					</div>
				</OptionChoice>

				<Expandable
					header={
						<div className="flex flex-row items-center justify-between p-5 cursor-pointer">
							<h4 className="font-semibold">Add your own sources</h4>
							<ChevronDownIcon
								className={`transition-all ${
									expanded ? 'rotate-180' : ''
								}`}
							/>
						</div>
					}
					onOpenChange={setExpanded}
					className="mb-5"
				>
					<div className="px-5 pb-5">
						<Input
							value={url}
							placeholder="Enter URL of the Source"
							clearable={false}
							className="mb-4"
							cursor-not-allowed
							disabled
							onInput={(e) => setUrl(e.currentTarget.value)}
							end={
								<div className="mt-3 mr-3">
									<button
										type="button"
										className="font-semibold bg-white text-purpl"
										onClick={handleOnAddUrl}
										disabled
									>
										Add URL
									</button>
								</div>
							}
							style={{ cursor: "not-allowed" }}
						/>

						{/* <FileDragAndDrop className="mb-4" types={['pdf']} /> */}
						<div
							className={`flex mb-4 flex-row items-center w-full py-3 text-gray-500 cursor-not-allowed rounded-lg bg-gray-100 border gap-2 border-gray-500 border-dashed justify-center`}
						>
							<UploadIcon />
							<h4 className="text-base font-semibold">
								Upload Document (pdf)
							</h4>
						</div>

						<div className="flex flex-row items-center justify-center w-full h-12 gap-3 mb-4 text-sm text-gray-500 bg-gray-100 rounded-lg">
							<InfoIcon />
							<span>
								Upload accepts only PDF format less than 10 MB in size
							</span>
						</div>

						<div className="h-[1px] w-full border-gray-300 border border-b-0 flex-1 mb-4"></div>

						<h4 className="font-semibold">Your added files and URLs</h4>

						<div className="flex flex-col w-full text-purpl">
							{sources &&
								sources.map((s) => (
									<SourceEntry
										key={s.name}
										name={s.name}
										icon={
											s.type === 'file' ? (
												<FileIcon />
											) : (
												<WorldIcon />
											)
										}
										onDelete={() => handleRemoveSource(s)}
									/>
								))}
						</div>
					</div>
				</Expandable>

				{!wokeloSources &&
				!otherSources &&
				((!sources || sources.length === 0) ?? false) ? (
					<Alert
						message="Select at least one option to proceed"
						type="error"
					/>
				) : null}
			</div>
		</div>
	);
};

export default SelectSourceAnalysis;
