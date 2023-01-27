import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { usePeerAnalysisContext } from '.';
import processingImage from '../../../assets/processing-cropped.gif';
import InfoIcon from '../../../components/icons/Info';
import Spinner from '../../../components/Spinner';
import {
	PROCESSING_COMPLETED,
	PROCESSING_FAILED,
} from '../../../constants/report-status.constants';
import useReportStatus from '../../../hooks/useReportStatus';
import { processPeerAnalysis } from '../../../store/slices/peerAnalysisSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';

const PullSources = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { onNext } = usePeerAnalysisContext();
	const { reportId, selectedCompanies, analysisName } = useAppSelector(
		(s) => s.peerAnalysis
	);
	const { reportStatus, comment } = useReportStatus(reportId ?? 0);

	// Only take the user to another step when report has finished.
	// On more request, send data according to backend.
	useEffect(() => {
		if (reportStatus === PROCESSING_COMPLETED) {
			onNext && onNext(4, true);
		} else if (reportId && reportStatus === PROCESSING_FAILED) {
			navigate('../error', { state: { reportId, comment } });
		}
	}, [reportStatus, reportId]);

	// On initial load, send the initial request for generating the report.
	useEffect(() => {
		if (selectedCompanies && !reportId) {
			dispatch(
				processPeerAnalysis({
					companies: selectedCompanies.map((c) => c.permalink),
					title: analysisName ?? '',
				})
			);
		}
	}, [selectedCompanies, reportId, analysisName]);

	return (
		<div className="flex flex-col items-center">
			<h2 className="mb-8 text-2xl font-semibold">
				Drafting your report
			</h2>

			<div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-wrap items-center w-full gap-6 p-5 mb-10 bg-white border rounded-lg shadow-sm xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 shadow-gray-300/30">
				<LazyLoadImage
					src={processingImage}
					width={236}
					height={236}
					className="w-[236px] h-[236px] rounded-lg"
					placeholder={<Spinner />}
				/>

				<div className="flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start 2xl:items-start">
					<span className="mb-2 text-sm font-semibold uppercase text-purpl">
						Processing...
					</span>

					<p className="mb-3 text-xl font-semibold">
						Please wait, it may take upto 1 min
					</p>
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

export default PullSources;
