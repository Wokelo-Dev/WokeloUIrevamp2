import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useMarketSnapshotContext } from '.';
import processingImage from '../../../assets/processing-cropped.gif';
import DownRightArrowIcon from '../../../components/icons/DownRightArrow';
import InfoIcon from '../../../components/icons/Info';
import Spinner from '../../../components/Spinner';
import {
	PROCESSING_COMPLETED,
	PROCESSING_FAILED,
} from '../../../constants/report-status.constants';
import useReportStatus from '../../../hooks/useReportStatus';
import { generateMarketSnapshot } from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { PROCESSING_COMPLETE_NO_DATA } from './../../../constants/report-status.constants';

const DraftingReport = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { onNext } = useMarketSnapshotContext();
	const { researchTopic, reportId, selectedLinks } = useAppSelector(
		(s) => s.marketSnapshot
	);
	const { reportStatus } = useReportStatus(reportId ?? 0);

	// Only take the user to another step when report has finished.
	// On more request, send data according to backend.
	useEffect(() => {
		if (reportId && reportStatus === PROCESSING_COMPLETED) {
			onNext && onNext(8, true);
		} else if (reportId && reportStatus === PROCESSING_FAILED) {
			navigate('./error');
		} else if(reportId && reportStatus === PROCESSING_COMPLETE_NO_DATA)
		{
			navigate("./error", { state: { reportId, comment: "NO_DATA" } });
		}
	}, [reportStatus, reportId]);

	// On initial load, send the initial request for generating the report.
	useEffect(() => {
		dispatch(
			generateMarketSnapshot({
				reportId: reportId ?? 0,
				headings: selectedLinks ?? [],
			})
		);
	}, []);

	return (
		<div className="flex flex-col items-center">
			<h2 className="mb-8 text-2xl font-semibold">
				Drafting your report for{' '}
				<span className="text-purpl">"{researchTopic}"</span>
			</h2>

			<div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-wrap items-center w-full gap-6 p-5 mb-10 bg-white border rounded-lg shadow-sm xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 shadow-gray-300/30">
				<LazyLoadImage
					src={processingImage}
					width={236}
					height={236}
					className="w-[236px] h-[236px] rounded-lg"
					placeholder={<Spinner />}
				/>

				<div className="flex flex-col items-start">
					<span className="mb-2 text-sm font-semibold uppercase text-purpl">
						Processing...
					</span>

					<p className="mb-3 text-xl font-semibold">
						Please wait, it may take upto 3 mins
					</p>

					{/* <span className="flex flex-row items-center gap-2 mb-3 font-semibold text-gray-500">
						<DownRightArrowIcon /> Wokelo leverage state of the art
					</span>
					<span className="flex flex-row items-center gap-2 mb-3 font-semibold text-gray-500">
						<DownRightArrowIcon /> Generative AI tech
					</span>
					<span className="flex flex-row items-center gap-2 font-semibold text-gray-500">
						<DownRightArrowIcon /> Drafting your report
					</span> */}
				</div>
			</div>

			{/* <div className="flex flex-row items-center justify-center w-full h-12 gap-3 text-sm text-gray-500 bg-gray-100 rounded-lg xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3">
				<InfoIcon />
				<span>
					NOTE: If it takes a long time, you can leave this page and return
					later
				</span>
			</div> */}
		</div>
	);
};

export default DraftingReport;
