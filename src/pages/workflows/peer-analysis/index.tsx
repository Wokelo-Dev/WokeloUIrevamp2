import { useState, useMemo, useEffect } from 'react';
import { useNavigate, Outlet, useOutletContext } from 'react-router-dom';
import Button from '../../../components/Button';
import InfoIcon from '../../../components/icons/Info';
import RightArrowIcon from '../../../components/icons/RightArrow';
import Modal from '../../../components/Modal';
import ProgressBar from '../../../components/ProgressBar';
import { StepModel } from '../../../models/step.model';
import {
	clearPeerAnalysis,
	setAnalysisName,
} from '../../../store/slices/peerAnalysisSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import InputField from '../../profile/components/InputField';

type PeerAnalysisContext = {
	onAllowNext: (allow: boolean) => void;
	onNext: (next?: number, replace?: boolean) => void;
};

const PeerAnalysis = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { analysisName } = useAppSelector((s) => s.peerAnalysis);
	const [nextDisabled, setNextDisabled] = useState(true);
	const currentPath = location.pathname.split('/').pop();
	const [analysisNameModal, setAnalysisNameModal] = useState(false);

	const handleOnNext = (next: number, replace?: boolean) => {
		const nextStep = steps.find((s) => s.id === next);

		if (nextStep?.path === 'analysis-name-modal') {
			setAnalysisNameModal(true);
		} else if (nextStep) {
			navigate(`./${nextStep.path}`, { replace: true });
		}
	};

	const handleOnAllowNext = (allow: boolean) => {
		setNextDisabled(!allow);
	};

	const handleBack = (prev: number) => {};

	const handleOnConfirmAnalysisName = () => {
		if ((analysisName?.length ?? 0) > 0) {
			setAnalysisNameModal(false);
			handleOnNext(3);
		} else {
			dispatch(setAnalysisName(''));
		}
	};

	const steps: StepModel[] = useMemo(
    () => [
      {
        id: 1,
        description: "Select up to 12 companies for analysis",
        renderNextButton: true,
        path: "company-search",
        progress: 10,
      },
      {
        id: 2,
        description: "Select up to 12 companies for analysis",
        renderNextButton: true,
        path: "analysis-name-modal",
        progress: 10,
      },
      {
        id: 3,
        description: "Pulling information across several sources",
        renderNextButton: false,
        path: "pull-sources",
        progress: 50,
      },
      {
        id: 4,
        description: <>Report successfully generated</>,
        renderNextButton: false,
        path: "report-generated",
        progress: 100,
      },
    ],
    [analysisName]
  );

	const currentStep = steps.find((s) => s.path === currentPath);

	// Load the first route
	useEffect(() => {
		if (currentPath === 'peer-analysis') {
			navigate(`./${steps[0].path}`, { replace: true });
			dispatch(clearPeerAnalysis());
		}
	}, [steps, currentPath]);

	return (
		<>
			<div className="bg-[#FEFEFF] mx-auto h-full w-full xs:w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-4/5 flex flex-col pt-9">
				{/* Header */}
				<div className="flex flex-row flex-wrap items-center justify-between mb-5">
					<div className="flex flex-col items-start">
						<h2 className="mb-2 text-2xl font-semibold">Peer analysis</h2>
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

				<ProgressBar
					progress={currentStep?.progress ?? 0}
					className="mb-8"
				/>

				<Outlet
					context={{
						onAllowNext: handleOnAllowNext,
						onNext: handleOnNext,
						onBack: handleBack,
					}}
				/>
			</div>

			<Modal
				open={analysisNameModal}
				onClose={() => setAnalysisNameModal(false)}
				className="w-full xs:w-full sm:w-full md:w-[452px] md:max-w-[452px] lg:w-[452px] lg:max-w-[452px] xl:w-[452px] xl:max-w-[452px] 2xl:w-[452px] 2xl:max-w-[452px]"
			>
				<div className="flex flex-col items-start mb-10">
					<h2 className="mb-2 text-2xl font-semibold">Analysis Name</h2>
					<p className="text-muted-dark-gray">
						Name this report
					</p>
				</div>

				<div className="flex flex-col mb-5">
					<h3 className="text-xl font-semibold">Add research name</h3>
					<InputField
						placeholder="Company analysis"
						onInput={(e) =>
							dispatch(setAnalysisName(e.currentTarget.value))
						}
						error={
							analysisName?.length === 0 ? (
								<>
									<InfoIcon /> Enter a research name to generate report
								</>
							) : null
						}
					/>
				</div>

				<Button
					className="flex items-center justify-center w-full"
					onClick={handleOnConfirmAnalysisName}
				>
					Save and Next
				</Button>
			</Modal>
		</>
	);
};

export function usePeerAnalysisContext() {
	return useOutletContext<PeerAnalysisContext>();
}

export default PeerAnalysis;
