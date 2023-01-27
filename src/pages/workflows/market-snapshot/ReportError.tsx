import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Alert from "../../../components/Alert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import serverErrorImage from "../../../assets/ServerError.png";
import Spinner from "../../../components/Spinner";
import { Link } from "react-router-dom";
import InfoIcon from "../../../components/icons/Info";
// import {
// 	SNAPSHOT_LOADING_PATH,
// 	SNAPSHOT_REPORT_ID,
// 	SNAPSHOT_RESEARCH_TOPIC,
// } from '../../../store/slices/marketSnapshotSlice';

const ReportError = () => {
  const location = useLocation();

  // useEffect(() => {
  // 	localStorage.removeItem(SNAPSHOT_REPORT_ID);
  // 	localStorage.removeItem(SNAPSHOT_RESEARCH_TOPIC);
  // 	localStorage.removeItem(SNAPSHOT_LOADING_PATH);
  // }, []);

  return (
    <div className="flex flex-col  gap-2 items-center mx-auto w-full">
      {location.state?.comment === "NO_DATA" && (
        <div className="flex flex-row items-center justify-center w-full h-12 gap-3 text-sm text-gray-500 bg-gray-100 rounded-lg xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3">
          <InfoIcon />
          <span>
            NOTE: No Relevant Data found for the company, Please select
            different company or different attributes.
          </span>
        </div>
      )}
      {/* <Alert
        type="error"
        message="There was an error while generating the report!"
      />
      <h4 className="font-semibold text-xl">Context</h4>
      <p className="text-base font-regular">
        Report ID: {location.state?.reportId}
      </p>
      <p className="text-base font-regular">
        Comment: {location.state?.comment}
      </p>
      <p className="text-base font-regular">Step: {location.state?.step}</p> */}
      {location.state?.comment !== "NO_DATA" && (
        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Sorry something went wrong
          </h2>

          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-wrap items-center w-full gap-6 p-5 mb-10 bg-white border rounded-lg shadow-sm xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 shadow-gray-300/30">
            <LazyLoadImage
              src={serverErrorImage}
              width={236}
              height={236}
              className="w-[236px] h-[auto] rounded-lg"
              placeholder={<Spinner />}
            />

            <div className="flex flex-col items-start mt-6">
              <span className="mb-2 text-base font-semibold uppercase text-purpl">
                500
              </span>

              <p>We are working on fixing this.</p>
              <br />
              <p className="mb-3">
                Please visit{" "}
                <Link className="text-blue-700 font-semibold" to="/">
                  'Home'
                </Link>{" "}
                or contact
                <br />
                <a href="mailto:support@wokelo.ai">support@wokelo.ai</a> if the
                issue persists
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportError;
