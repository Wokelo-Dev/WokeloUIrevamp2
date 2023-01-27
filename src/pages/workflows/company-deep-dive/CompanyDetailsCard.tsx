import { useEffect } from "react";
import BuildingIcon from "../../../components/icons/Building";
import LinkIcon from "../../../components/icons/Link";
import LocationIcon from "../../../components/icons/Location";
import PieChartIcon from "../../../components/icons/PieChart";
import UserIcon from "../../../components/icons/User";
import WorldIcon from "../../../components/icons/World";
import Skeleton from "../../../components/Skeleton";
import { CompanyModel } from "../../../models/company.model";
import { getCompanyDetails } from "../../../store/slices/companySlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

export type CompanyDetailsCardProps = {
  company: CompanyModel;
};

const CompanyDetailsCard = ({ company }: CompanyDetailsCardProps) => {
  const dispatch = useAppDispatch();
  const { companyDetails, companyDetailsLoading } = useAppSelector(
    (s) => s.company
  );

  useEffect(() => {
    dispatch(getCompanyDetails({ company }));
  }, []);

  return (
    <div className="flex flex-col w-full p-6 transition-all border border-purpl rounded-md shadow-sm cursor-pointer bg-purpl-light shadow-gray-500/30">
      <div className="flex flex-row items-center gap-3 mb-5">
        {!company.logo && (
          <img
            className="h-auto w-7"
            src={"https://wokelo.ai/static/media/placeholder_logo.png"}
            alt={`${company?.name} logo`}
          />
        )}
        {company.logo && (
          <img
            className="h-auto w-7"
            src={`https://res.cloudinary.com/crunchbase-production/image/upload/${company?.logo}`}
            alt={`${company?.name} logo`}
          />
        )}

        {companyDetailsLoading ? (
          <Skeleton className="w-1/2" />
        ) : (
          <h4 className="font-regular">{companyDetails?.name}</h4>
        )}
      </div>

      <div className="mb-7">
        {companyDetailsLoading ? (
          <div className="flex flex-col items-start gap-2">
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-1/3" />
          </div>
        ) : (
          <p className="text-base ">{companyDetails?.description}</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-5">
        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <BuildingIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              Company name: {companyDetails?.legalName}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <LinkIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              Website: {companyDetails?.website}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <WorldIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              Ownership: {companyDetails?.ownership}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <LocationIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              HQ: {companyDetails?.hq}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <UserIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              Founded: {companyDetails?.founded}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center w-full">
          <span className="w-10 flex items-center justify-center">
            <PieChartIcon />
          </span>

          {companyDetailsLoading ? (
            <Skeleton className="w-1/2" />
          ) : (
            <span className="text-base font-regular">
              Sector: {companyDetails?.sector}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
