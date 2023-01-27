import { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import Button from "../../../components/Button";
import RightArrowIcon from "../../../components/icons/RightArrow";
import ProgressBar from "../../../components/ProgressBar";
import { StepModel } from "../../../models/step.model";
import {
  clearCompanyDeepDive,
  // LOADING_PATH,
  // REPORT_ID,
} from "../../../store/slices/companyDeepDiveSlice";
import { clearAll } from "../../../store/slices/companySlice";
import { useAppDispatch } from "../../../store/store";
import { useAppSelector } from "../../../store/store";
type CompanyDeepDiveContext = {
  onAllowNext: (allow: boolean) => void;
  onNext: (next?: number, replace?: boolean) => void;
};

const CompanyDeepDive = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [nextDisabled, setNextDisabled] = useState(true);
  const currentPath = location.pathname.split("/").pop();

  const { defaultAttributes, secondaryAttributes } = useAppSelector(
    (s) => s.companyDeepDive
  );

  const handleOnNext = (next: number, replace?: boolean) => {
    const nextStep = steps.find((s) => s.id === next);

    if (nextStep) {
      navigate(`./${nextStep.path}`, { replace });
    }
  };

  const handleOnAllowNext = (allow: boolean) => {
    setNextDisabled(!allow);
  };

  const steps: StepModel[] = useMemo(
    () => [
      {
        id: 1,
        description: "Select company for research",
        renderNextButton: true,
        path: "company-search",
        progress: 10,
      },
      {
        id: 2,
        description: "Select attributes for analysis",
        renderNextButton: true,
        path: "attributes-selection",
        progress: 50,
      },
      {
        id: 3,
        description: "Collecting information based on selected attributes",
        renderNextButton: false,
        path: "pull-sources",
        progress: 50,
      },
      {
        id: 4,
        description: "Deselect non-relevant articles",
        renderNextButton: true,
        path: "extra-attributes-selection",
        progress: 75,
      },
      {
        id: 5,
        description: "Synthesizing and authoring document",
        renderNextButton: false,
        path: "drafting-report",
        progress: 75,
      },
      {
        id: 6,
        description: "Report successfully generated",
        renderNextButton: false,
        path: "report-generated",
        progress: 100,
      },
    ],
    []
  );

  const currentStep = steps.find((s) => s.path === currentPath);

  // Load the first route
  useEffect(() => {
    if (currentPath === "company-deep-dive") {
      navigate(`./${steps[0].path}`, { replace: true });
      dispatch(clearCompanyDeepDive());
      dispatch(clearAll());
    }
  }, [steps, currentPath]);

  return (
    <div className="bg-[#FEFEFF] mx-auto h-full w-full xs:w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-4/5 flex flex-col pt-9">
      {/* Header */}
      <div className="flex flex-row flex-wrap items-center justify-between mb-5">
        <div className="flex flex-col items-start">
          <h2 className="mb-2 text-2xl font-semibold">Company Deep Dive</h2>
          <p className="text-muted-dark-gray">{currentStep?.description}</p>
        </div>

        {currentStep?.renderNextButton ? (
          <Button
            onClick={() => {
              if (
                defaultAttributes.indexOf("investment") !== -1 &&
                currentStep.id === 2
              )
                handleOnNext(3, false);
              else if (
                defaultAttributes.indexOf("investment") === -1 &&
                currentStep.id === 2
              )
                handleOnNext(3, false);
              else handleOnNext(currentStep.id + 1, false);
            }}
            disabled={nextDisabled}
            className="flex-shrink-0"
          >
            Next Step <RightArrowIcon />
          </Button>
        ) : null}
      </div>

      <ProgressBar progress={currentStep?.progress ?? 0} className="mb-8" />

      <Outlet
        context={{ onAllowNext: handleOnAllowNext, onNext: handleOnNext }}
      />
    </div>
  );
};

export function useCompanyDeepDiveContext() {
  return useOutletContext<CompanyDeepDiveContext>();
}

export default CompanyDeepDive;
