import Sidebar from "../../components/layout/Sidebar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageNotFoundImage from "../../assets/PageNotFound.png"
import Spinner from "../../components/Spinner";
import Navbar from "../../components/layout/Navbar";
import BottomBar from "../../components/BottomBar";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-row w-full h-[100vh]">
      <Sidebar />

      <div className="flex flex-col w-full h-full overflow-auto bg-white">
        <Navbar />

        <div
          className="pt-[65px] pb-[85px] px-5 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col items-center content-center mt-[80px] w-[70%]">
            <h2 className="mb-8 text-2xl font-semibold">Page Not Found</h2>

            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-wrap items-center w-full gap-6 p-5 mb-10 bg-white border rounded-lg shadow-sm xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 shadow-gray-300/30">
              <LazyLoadImage
                src={PageNotFoundImage}
                width={236}
                height={236}
                className="w-[236px] h-[auto] rounded-lg"
                placeholder={<Spinner />}
              />

              <div className="flex flex-col items-start mt-6">
                <span className="mb-2 text-base font-semibold uppercase text-purpl">
                  404
                </span>

                <p className="">The page you are looking for </p>

                <p>
                  doesn't exist or an other error
                  <br />
                  occured.
                </p>
                <br />
                <p>
                  Please visit{" "}
                  <Link className="text-blue-700 font-semibold" to="/">
                    'Home'
                  </Link>{" "}
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
        </div>

        <BottomBar />
      </div>
    </div>
  );
};

export default PageNotFound;
