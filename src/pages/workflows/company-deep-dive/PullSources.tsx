import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useCompanyDeepDiveContext } from '.';
import processingImage from '../../../assets/processing-cropped.gif';
import InfoIcon from '../../../components/icons/Info';
import SearchIcon from '../../../components/icons/Search';
import Spinner from '../../../components/Spinner';
import {
	PROCESSING_COMPLETED,
	PROCESSING_COMPLETED_INT,
	PROCESSING_FAILED,
} from '../../../constants/report-status.constants';
import useReportStatus from '../../../hooks/useReportStatus';
import {
	getRecentStrategyShortlist,
	postProcessRecentStrategy,
} from '../../../store/slices/companyDeepDiveSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { PROCESSING_COMPLETE_NO_DATA } from './../../../constants/report-status.constants';

const PullSources = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { onNext } = useCompanyDeepDiveContext();
	const { reportId, selectedCompany, defaultAttributes, secondaryAttributes } =
		useAppSelector((s) => s.companyDeepDive);
	const { reportStatus, comment } = useReportStatus(reportId ?? 0);

	// Only take the user to another step when report has finished.
	// On more request, send data according to backend.
	useEffect(() => {
		if (reportStatus === PROCESSING_COMPLETED) {
      onNext && onNext(6, true);
    } else if (reportStatus === PROCESSING_COMPLETED_INT && reportId) {
      dispatch(getRecentStrategyShortlist({ reportId }));
      onNext && onNext(4, true);
    } else if (reportId && reportStatus === PROCESSING_FAILED) {
      navigate("../error", { state: { reportId, comment } });
    } else if (reportId && reportStatus === PROCESSING_COMPLETE_NO_DATA)
      navigate("../error", { state: { reportId, comment:"NO_DATA" } });
	}, [reportStatus, reportId]);

	// On initial load, send the initial request for generating the report.
	useEffect(() => {
		if (selectedCompany && !reportId) {
			dispatch(
				postProcessRecentStrategy({
					name: selectedCompany.name,
					permalink: selectedCompany.permalink,
					keywords: [
						...defaultAttributes.filter((a) => a !== 'overview'),
						...(secondaryAttributes ?? []),
					],
				})
			);
		}
	}, [selectedCompany, reportId]);

	return (
    <div className="flex flex-col items-center">
      {defaultAttributes.indexOf("investment") === -1 && (
        <h2 className="mb-8 text-2xl font-semibold">
          Drafting your report
        </h2>
      )}
      {defaultAttributes.indexOf("investment") !== -1 && (
        <h2 className="mb-8 text-2xl font-semibold">
          Pulling relevant sources for analysis
        </h2>
      )}

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
          {defaultAttributes.indexOf("investment") === -1 && (
            <p className="mb-3 text-xl font-semibold">
              Please wait, it may take upto 10 mins
            </p>
          )}
          {defaultAttributes.indexOf("investment") !== -1 && (
            <p className="mb-3 text-xl font-semibold">
              Please wait, it may take upto 3 mins
            </p>
          )}
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
