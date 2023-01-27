import Sidebar from "../../components/layout/Sidebar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import processingImage from "../../assets/processing-cropped.gif";
import serverErrorImage from "../../assets/ServerError.png"
import Spinner from "../../components/Spinner";
import Navbar from "../../components/layout/Navbar";
import BottomBar from "../../components/BottomBar";
const RouteError = () => {
  return (
    <div className="flex flex-row w-full h-[100vh]">
      {/* <Sidebar /> */}

      <div className="flex flex-col w-full h-full overflow-auto bg-white">
        {/* <Navbar /> */}

        <div
          className="pt-[65px] pb-[85px] px-5 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col items-center content-center w-full">
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

                <p >We are working on fixing this.</p>
                <br />
                <p className="mb-3">
                  Please visit 'Home' or contact
                  <br />
                  <a href="mailto:support@wokelo.ai">support@wokelo.ai</a> if
                  the issue persists
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
        </div>

        <BottomBar />
      </div>
    </div>
  );
};

export default RouteError;
