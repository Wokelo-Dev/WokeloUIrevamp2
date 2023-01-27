import { useEffect } from "react";
import { useMarketSnapshotContext } from ".";
import InfoIcon from "../../../components/icons/Info";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import {
  clearAttributes,
  setResearchTopic,
} from "../../../store/slices/marketSnapshotSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { StepperFormEntryProps } from "../stepper-form-entry.props";

const ResearchTopicSelection = ({ onAllowChange }: StepperFormEntryProps) => {
  const { onAllowNext } = useMarketSnapshotContext();
  const dispatch = useAppDispatch();
  const { researchTopic } = useAppSelector((s) => s.marketSnapshot);
  // const [options, setOptions] = useState<AutocompleteOption[]>([]);

  // const handleSearch = async (term: string) => {
  // 	if (term.length === 0) {
  // 		return;
  // 	}

  // 	const results = await Api.searchResearchTopics(term);
  // 	if (results) {
  // 		setOptions(
  // 			results.map((r) => ({
  // 				value: r,
  // 				element: (
  // 					<div className="flex flex-row items-center gap-2 px-5 py-2 mx-2 font-semibold transition-all cursor-pointer hover:bg-purpl-light">
  // 						<WorldIcon /> <span>{r}</span>
  // 					</div>
  // 				),
  // 			}))
  // 		);
  // 	}
  // };

  // const handleClear = () => {
  // 	dispatch(setResearchTopic(null));
  // };

  const handleOnInput = (value: string) => {
    dispatch(setResearchTopic(value));
  };

  useEffect(() => {
    onAllowNext((researchTopic?.length ?? 0) > 0);
  }, [researchTopic]);

  useEffect(() => {
    dispatch(clearAttributes());
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
        <h3 className="mb-4 text-xl font-semibold">Add research topic</h3>

        <div className="mb-8 flex flex-col gap-3 w-full">
          <Input
            onInput={(e) => handleOnInput(e.currentTarget.value)}
            placeholder="Enter topic name"
          />

          {researchTopic?.length === 0 ? (
            <span className="text-xs text-red-500 flex flex-row items-center gap-2">
              <InfoIcon /> Enter research topic to proceed
            </span>
          ) : null}
        </div>

        <h3 className="mb-1 text-xl font-semibold">
          Describe requirements{" "}
          <span className=" font-normal text-sm ">(Optional)</span>
        </h3>
        <p className="mb-4 font-regular">
          Please add 2-3 sentences in natural language
        </p>
        <TextArea placeholder="Enter details" rows={5} className="mb-8" />

        {/* <div className="flex flex-row items-center justify-center w-full gap-3 p-4 text-sm text-gray-500 bg-gray-100 rounded-lg">
					<InfoIcon className="flex-shrink-0" />
					<span>
						For Example : Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</span>
				</div> */}
      </div>
    </div>
  );
};

export default ResearchTopicSelection;
