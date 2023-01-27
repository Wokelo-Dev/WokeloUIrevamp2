import { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/Button';
import RightArrowIcon from '../../../components/icons/RightArrow';
import ProgressBar from '../../../components/ProgressBar';
import { StepModel } from '../../../models/step.model';
import { clearMarketSnapshot } from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';

type MarketSnapshotContext = {
	onAllowNext: (allow: boolean) => void;
	onNext: (next: number, replace?: boolean) => void;
	onBack: (prev: number) => void;
};

const MarketSnapshot = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { researchTopic, reportId } = useAppSelector((s) => s.marketSnapshot);
	const [nextDisabled, setNextDisabled] = useState(true);
	const currentPath = location.pathname.split('/').pop();

	const handleOnNext = (next: number, replace?: boolean) => {
		const nextStep = steps.find((s) => s.id === next);

		if (nextStep) {
			navigate(`./${nextStep.path}`, { replace: true });
		}
	};

	const handleOnAllowNext = (allow: boolean) => {
		setNextDisabled(!allow);
	};

	const handleBack = (prev: number) => {};

	

	const steps: StepModel[] = useMemo(
    () => [
      {
        id: 1,
        description: "Define research requirements",
        renderNextButton: true,
        path: "research-topic-selection",
        progress: 10,
      },
      {
        id: 2,
        description: "Get market report in just 5 steps using our AI",
        renderNextButton: false,
        path: "attribute-fetching",
        progress: 10,
      },
      {
        id: 3,
        description: (
          <>
            Select attributes relevant to topic{" "}
            {/* <span className="text-purpl">{researchTopic}</span> */}
          </>
        ),
        renderNextButton: true,
        path: "attribute-selection",
        progress: 30,
      },
      {
        id: 4,
        description: <>Source selection</>,
        renderNextButton: true,
        path: "select-source-analysis",
        progress: 50,
      },
      {
        id: 5,
        description: (
          <>
            Finding relevant links and sources
            {/* <span className="text-purpl">{researchTopic}</span> research */}
          </>
        ),
        renderNextButton: false,
        path: "document-processing",
        progress: 50,
      },
      {
        id: 6,
        description: <>Confirm relevant sources for report</>,
        renderNextButton: true,
        path: "research-link-selection",
        progress: 70,
      },
      {
        id: 7,
        description: <>Synthesizing and authoring document</>,
        renderNextButton: false,
        path: "drafting-report",
        progress: 70,
      },
      {
        id: 8,
        description: <>Report successfully generated</>,
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
		if (currentPath === 'market-snapshot') {
			navigate(`./${steps[0].path}`, { replace: true });
			dispatch(clearMarketSnapshot());
		}
	}, [steps, currentPath]);

	// // Restore current state, if report id is present in localStorage,
	// // then we should navigate directly to a loading step
	// useEffect(() => {
	// 	const stepPath = localStorage.getItem(SNAPSHOT_LOADING_PATH);
	// 	if (reportId && reportId > 0 && stepPath) {
	// 		dispatch(setReportId(reportId));
	// 		navigate(`./${stepPath}`);
	// 	}
	// }, [reportId]);

	return (
		<div className="bg-[#FEFEFF] mx-auto h-full w-full xs:w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-4/5 flex flex-col pt-9">
			{/* Header */}
			<div className="flex flex-row flex-wrap items-center justify-between mb-5">
				<div className="flex flex-col items-start">
					<h2 className="mb-2 text-2xl font-semibold">Market Snapshot</h2>
					<p className="text-muted-dark-gray">
						{currentStep?.description}
					</p>
				</div>

				{currentStep?.renderNextButton ? (
					<Button
						onClick={() => handleOnNext(currentStep.id + 1, false)}
						disabled={nextDisabled}
						className="flex-shrink-0"
					>
						Next Step <RightArrowIcon />
					</Button>
				) : null}
			</div>

			<ProgressBar progress={currentStep?.progress ?? 0} className="mb-8" />

			<Outlet
				context={{
					onAllowNext: handleOnAllowNext,
					onNext: handleOnNext,
					onBack: handleBack,
				}}
			/>
		</div>
	);
};

export function useMarketSnapshotContext() {
	return useOutletContext<MarketSnapshotContext>();
}

export default MarketSnapshot;
