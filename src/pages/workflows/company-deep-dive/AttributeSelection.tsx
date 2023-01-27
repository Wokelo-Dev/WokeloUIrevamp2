import { useEffect } from "react";
import { useCompanyDeepDiveContext } from ".";
import BuildingIcon from "../../../components/icons/Building";
import BulbIcon from "../../../components/icons/Bulb";
import DocumentIcon from "../../../components/icons/Document";
import DollarIcon from "../../../components/icons/Dollar";
import HandshakeIcon from "../../../components/icons/Handshake";
import InfoIcon from "../../../components/icons/Info";
import LineChartIcons from "../../../components/icons/LineChart";
import MessageIcon from "../../../components/icons/Message";
import PieChartIcon from "../../../components/icons/PieChart";
import StarIcon from "../../../components/icons/Star";
import {
  setDefaultAttributes,
  setSecondaryAttributes,
} from "../../../store/slices/companyDeepDiveSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import AttributeCard from "./AttributeCard";

export type DefaultAttribute = "overview" | "acquisition" | "investment";
export type SecondaryAttribute =
  | "partnership"
  | "product-insights"
  | "leadership-interview"
  | "user-reviews"
  | "hiring-strategy"
  | "analyst-outlook";

const AttributeSelection = () => {
  const { onAllowNext } = useCompanyDeepDiveContext();
  const dispatch = useAppDispatch();
  const { companyDetails } = useAppSelector((s) => s.company);
  const { defaultAttributes, secondaryAttributes } = useAppSelector(
    (s) => s.companyDeepDive
  );

  const handleOnDefaultAttributeClick = (attr: DefaultAttribute) => {
    if (defaultAttributes?.includes(attr)) {
      dispatch(
        setDefaultAttributes(defaultAttributes.filter((a) => a !== attr))
      );
    } else {
      dispatch(setDefaultAttributes([...(defaultAttributes ?? []), attr]));
    }
  };

  const handleOnSecondaryAttributeClick = (attr: SecondaryAttribute) => {
    if (
      attr === "analyst-outlook" ||
      attr === "user-reviews" ||
      attr === "hiring-strategy" ||
      attr === "product-insights" ||
      attr === "leadership-interview"
    ) {
      return;
    }
    if (secondaryAttributes?.includes(attr)) {
      dispatch(
        setSecondaryAttributes(secondaryAttributes.filter((a) => a !== attr))
      );
    } else {
      dispatch(setSecondaryAttributes([...(secondaryAttributes ?? []), attr]));
    }
  };

  

  useEffect(() => {
    if ( defaultAttributes?.length === 1 && (!secondaryAttributes || secondaryAttributes.length === 0 )) {
        onAllowNext(false);
    } else {
      onAllowNext(true);
    }
  }, [defaultAttributes, secondaryAttributes]);

  return (
    <div className="flex flex-col items-start w-full">
      {/* <h4 className="font-semibold mb-5">
				Selected below attributes for analysis
			</h4> */}
      <div className="gap-4 w-full mb-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <AttributeCard
          title="Overview"
          description="Company Profile"
          icon={<DocumentIcon />}
          selected={defaultAttributes?.includes("overview")}
          className="cursor-not-allowed"
        />
        <AttributeCard
          title="Acquisitions"
          description={`${companyDetails?.acquisitions} acquisitions found`}
          icon={<BuildingIcon />}
          disabled={companyDetails?.acquisitions === 0}
          selected={defaultAttributes?.includes("acquisition")}
          onClick={() => handleOnDefaultAttributeClick("acquisition")}
        />
        <AttributeCard
          title="Investments"
          description={`${companyDetails?.investments} investments found`}
          icon={<DollarIcon />}
          disabled={companyDetails?.investments === 0}
          selected={defaultAttributes?.includes("investment")}
          onClick={() => handleOnDefaultAttributeClick("investment")}
        />
        {/* </div> */}

        {/* <h4 className="font-semibold mb-5">
				Select below attibutes, Wokelo will look for information on these in
				the next step
			</h4> */}
        {/* <div className="gap-4 mb-8 w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"> */}
        <AttributeCard
          title="Partnerships"
          icon={<HandshakeIcon />}
          selected={secondaryAttributes?.includes("partnership")}
          onClick={() => handleOnSecondaryAttributeClick("partnership")}
        />
        <AttributeCard
          title="Product Insights"
          description={
            <span className="text-purple-700 text-sm">Coming soon</span>
          }
          icon={<LineChartIcons />}
          selected={secondaryAttributes?.includes("product-insights")}
          onClick={() => handleOnSecondaryAttributeClick("product-insights")}
          className="cursor-not-allowed"
        />
        <AttributeCard
          title="Leadership Interview"
          description={
            <span className="text-purple-700 text-sm">Coming soon</span>
          }
          icon={<MessageIcon />}
          selected={secondaryAttributes?.includes("leadership-interview")}
          onClick={() =>
            handleOnSecondaryAttributeClick("leadership-interview")
          }
          className="cursor-not-allowed"
        />
        <AttributeCard
          title="User reviews"
          description={
            <span className="text-purple-700 text-sm">Coming soon</span>
          }
          icon={<StarIcon />}
          selected={secondaryAttributes?.includes("user-reviews")}
          onClick={() => handleOnSecondaryAttributeClick("user-reviews")}
          className="cursor-not-allowed"
        />
        <AttributeCard
          title="Hiring strategy"
          description={
            <span className="text-purple-700 text-sm">Coming soon</span>
          }
          icon={<BulbIcon />}
          selected={secondaryAttributes?.includes("hiring-strategy")}
          onClick={() => handleOnSecondaryAttributeClick("hiring-strategy")}
          className="cursor-not-allowed"
        />
        <AttributeCard
          title="Analyst outlook"
          description={
            <span className="text-purple-700 text-sm">Coming soon</span>
          }
          icon={<PieChartIcon />}
          selected={secondaryAttributes?.includes("analyst-outlook")}
          onClick={() => handleOnSecondaryAttributeClick("analyst-outlook")}
          className="cursor-not-allowed"
        />
      </div>

      <div className="flex gap-3 mt-6 text-sm h-12 w-full flex-row items-center bg-gray-100 text-gray-500 rounded-lg justify-center ">
        {/* <InfoIcon /> */}
        <span>
          NOTE : Please select at least 2 attributes to generate report
        </span>
      </div>
    </div>
  );
};

export default AttributeSelection;
