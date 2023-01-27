import CheckIcon from '../../../components/icons/Check';
import PowerPointIcon from '../../../components/icons/PowerPoint';
import WordIcon from '../../../components/icons/Word';
import { useAppSelector } from '../../../store/store';
import { Api } from '../../../lib/api';
import useRecentStrategyReport from '../../../hooks/useRecentStrategyReport';
import { FormatUtils } from '../../../utils/FormatUtils';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
// import {
// 	LOADING_PATH,
// 	REPORT_ID,
// } from '../../../store/slices/companyDeepDiveSlice';

// const docs = [
// 	{
// 		uri: 'https://wokelo-dev.eastus.cloudapp.azure.com/api/recent_strategy/download_ppt/',
// 		fileType:
// 			'application/vnd.openxmlformats-officedocument.presentationml.presentation',
// 	},
// ];

const ReportGenerated = () => {
	const { reportId } = useAppSelector((s) => s.companyDeepDive);
	// const [loading, setLoading] = useState(false);
	const { info } = useRecentStrategyReport(reportId);

	// useEffect(() => {
	// 	// localStorage.removeItem(REPORT_ID);
	// 	// localStorage.removeItem(LOADING_PATH);

	// 	setLoading(true);
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 3000);
	// }, []);

	const handleOpenDocModal = async () => {
		if (reportId) {
			const res = await Api.downloadRecentStrategyDoc(reportId);
		}
	};

	const handleOpenPptModal = async () => {
		if (reportId) {
			const res = await Api.downloadRecentStrategyPpt(reportId);
		}
	};
	

	

	// console.log(info)

	return (
		<div className="grid w-full grid-cols-1 gap-10 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
			<div className="flex flex-col items-start w-full">
				<h3 className="mb-3 text-xl font-semibold">
					Your report is ready for download and sent to your email
				</h3>
				{/* <p className="font-regular mb-7">
					You can download it for PDF and you can preview your document
					here, This is also available under reports tab.
				</p> */}

				<p className="font-regular mb-7">
					This document is also available under{' '}
					<Link
						to="/dashboard/reports"
						className="font-semibold underline text-purpl"
					>
						Reports
					</Link> 
					{' '}
					tab.
				</p>

				<span className="mb-4 text-base font-semibold uppercase text-purpl">
					Summary:
				</span>

				<div className="flex flex-row items-center gap-2 mb-5">
					<span className="flex items-center justify-center w-5 h-5 rounded-full bg-purpl-light text-purpl">
						<CheckIcon />
					</span>
					<p className="font-semibold">
						Total words processed -{' '}
						{FormatUtils.number(info?.total_words_processed ?? 0)}
					</p>
				</div>
				<div className="flex flex-row items-center gap-2 mb-5">
					<span className="flex items-center justify-center w-5 h-5 rounded-full bg-purpl-light text-purpl">
						<CheckIcon />
					</span>
					<p className="font-semibold">Estimated time saved - {info?.time_saved}</p>
				</div>
				{/* <div className="flex flex-row items-center gap-2 mb-5">
					<span className="flex items-center justify-center w-5 h-5 rounded-full bg-purpl-light text-purpl">
						<CheckIcon />
					</span>
					<p className="font-semibold">Credits used - {info?.credits_used}</p>
				</div> */}

				<button
					type="button"
					className="flex flex-row w-full gap-3 px-4 py-3 mb-5 transition-all bg-white border border-gray-300 rounded-lg shadow-sm shadow-gray-500/30 hover:shadow-lg"
					onClick={handleOpenDocModal}
				>
					<WordIcon />
					<span className="font-semibold">Download Word </span>
				</button>

				<button
					type="button"
					className="flex flex-row w-full gap-3 px-4 py-3 mb-5 transition-all bg-white border border-gray-300 rounded-lg shadow-sm shadow-gray-500/30 hover:shadow-lg"
					onClick={handleOpenPptModal}
				>
					<PowerPointIcon />
					<span className="font-semibold">Download PPT </span>
				</button>
			</div>

			{/* Document preview */}
			{/* <div className="h-[500px] w-full border border-gray-300 rounded-lg shadow-sm shadow-gray-300 hover:shadow-md transition-all">
					{loading ? (
						<div className="flex flex-col items-center justify-center h-full">
							<LazyLoadImage
								src="https://wokelo.ai/statichtml/images/printer.gif"
								width={300}
								height={300}
								className="w-[300px] mb-3"
							/>
							<p className="font-semibold text-purple-700 uppercase">
								Preview loading
							</p>
						</div>
					) : (
						<DocViewer
							documents={docs}
							pluginRenderers={DocViewerRenderers}
							config={{
								header: {
									disableHeader: false,
									disableFileName: false,
									retainURLParams: false,
								},
							}}
						/>
					)}
				</div> */}
		</div>
	);
};

export default ReportGenerated;
