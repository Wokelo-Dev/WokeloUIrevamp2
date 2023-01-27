import { useEffect } from "react";
import { useCompanyDeepDiveContext } from ".";
import Alert from "../../../components/Alert";
import FileSmallIcon from "../../../components/icons/FileSmall";
import OptionChoice from "../../../components/OptionChoice";
import { PostArticleModel } from "../../../models/post-article.model";
import {
  getRecentStrategyShortlist,
  setSelectedAcquisitionArticles,
  setSelectedInvestmentArticles,
  setSelectedPartnershipArticles,
} from "../../../store/slices/companyDeepDiveSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import InfoIcon from "../../../components/icons/Info";

export type AttributeSection = "partnership" | "investment" | "acquisition";

const ExtraAttributesSelection = () => {
  const { onAllowNext } = useCompanyDeepDiveContext();
  const dispatch = useAppDispatch();
  const {
    acquisitionArticles,
    investmentArticles,
    partnershipArticles,
    selectedAcquisitionArticles,
    selectedInvestmentArticles,
    selectedPartnershipArticles,
    defaultAttributes,
    secondaryAttributes,
    reportId,
  } = useAppSelector((s) => s.companyDeepDive);

  const handleSelectAttribute = (
    article: PostArticleModel,
    section: AttributeSection
  ) => {
    switch (section) {
      case "partnership":
        if (selectedPartnershipArticles?.find((sa) => sa.url === article.url)) {
          dispatch(
            setSelectedPartnershipArticles(
              selectedPartnershipArticles?.filter((a) => a.url !== article.url)
            )
          );
        } else {
          dispatch(
            setSelectedPartnershipArticles([
              ...(selectedPartnershipArticles ?? []),
              article,
            ])
          );
        }
        break;
      case "acquisition":
        if (selectedAcquisitionArticles?.find((sa) => sa.url === article.url)) {
          dispatch(
            setSelectedAcquisitionArticles(
              selectedAcquisitionArticles?.filter((a) => a.url !== article.url)
            )
          );
        } else {
          dispatch(
            setSelectedAcquisitionArticles([
              ...(selectedAcquisitionArticles ?? []),
              article,
            ])
          );
        }
        break;
      case "investment":
        if (selectedInvestmentArticles?.find((sa) => sa.url === article.url)) {
          dispatch(
            setSelectedInvestmentArticles(
              selectedInvestmentArticles?.filter((a) => a.url !== article.url)
            )
          );
        } else {
          dispatch(
            setSelectedInvestmentArticles([
              ...(selectedInvestmentArticles ?? []),
              article,
            ])
          );
        }
        break;
    }
  };

  useEffect(() => {
    onAllowNext(true);
  }, []);

  useEffect(() => {
    console.log(investmentArticles);
  });

  // On change of reportId and availability, restore state.
  useEffect(() => {
    if (reportId) {
      dispatch(getRecentStrategyShortlist({ reportId }));
    }
  }, [reportId]);

  return (
    <div className="flex flex-col items-start">
      {partnershipArticles ? (
        <>
          <h3 className="mb-5 text-xl font-semibold">Partnership</h3>
          <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {partnershipArticles.length > 0 ? (
              partnershipArticles.map((a) => (
                <OptionChoice
                  key={a.url}
                  selected={Boolean(
                    selectedPartnershipArticles?.find((sa) => sa.url === a.url)
                  )}
                  onChange={(s) => handleSelectAttribute(a, "partnership")}
                >
                  {a.title}
                </OptionChoice>
              ))
            ) : (
              <Alert
                className="px-3"
                align="start"
                icon={
                  <span className="flex items-center justify-center bg-gray-200 rounded-full h-7 w-7">
                    <FileSmallIcon className="text-sm" />
                  </span>
                }
                type="default"
                message="No relevant links found for partnerships"
              />
            )}
          </div>
        </>
      ) : null}

      {investmentArticles ? (
        <>
          <h3 className="mt-5 mb-5 text-xl font-semibold">
            Investments -{" "}
            <span className="font-light">
              Validate investee company and news article pairings
            </span>{" "}
          </h3>
          <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {investmentArticles.length > 0 ? (
              investmentArticles.map((a) => (
                <OptionChoice
                  key={a.url}
                  selected={Boolean(
                    selectedInvestmentArticles?.find((sa) => sa.url === a.url)
                  )}
                  onChange={(s) => handleSelectAttribute(a, "investment")}
                >
                  {/* <table>
                    <tr>
                      <td>
                        <strong>{a.company}</strong>
                       
                      </td>
                      <td>
                        <span>{a.title}</span>
                      </td>
                    </tr>
                  </table> */}
                  <strong>{a.company}</strong>
                  <span>{a.title}</span>
                </OptionChoice>
              ))
            ) : (
              <Alert
                className="px-3"
                align="start"
                icon={
                  <span className="flex items-center justify-center bg-gray-200 rounded-full h-7 w-7">
                    <FileSmallIcon className="text-sm" />
                  </span>
                }
                type="default"
                message="No relevant links found for investments"
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row items-center justify-center w-full h-12 gap-3 text-sm text-gray-500 bg-gray-100 rounded-lg xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3">
            <InfoIcon />
            <span>
              NOTE: No Investment Links found, click 'Next' to continue
            </span>
          </div>
        </>
      )}

      {acquisitionArticles ? (
        <>
          <h3 className="mt-5 mb-5 text-xl font-semibold">Acquisition</h3>
          <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {acquisitionArticles.length > 0 ? (
              acquisitionArticles.map((a) => (
                <OptionChoice
                  key={a.url}
                  selected={Boolean(
                    selectedAcquisitionArticles?.find((sa) => sa.url === a.url)
                  )}
                  onChange={(s) => handleSelectAttribute(a, "acquisition")}
                >
                  {a.title}
                </OptionChoice>
              ))
            ) : (
              <Alert
                className="px-3"
                align="start"
                icon={
                  <span className="flex items-center justify-center bg-gray-200 rounded-full h-7 w-7">
                    <FileSmallIcon className="text-sm" />
                  </span>
                }
                type="default"
                message="No relevant links found for acquisitions"
              />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ExtraAttributesSelection;
