import { useEffect } from 'react';
import { useMarketSnapshotContext } from '.';
import Alert from '../../../components/Alert';
import TagIcon from '../../../components/icons/Tag';
import OptionChoice from '../../../components/OptionChoice';
import { LinkModel } from '../../../models/link.model';
import {
	getMarketSnapshotShortlist,
	removeResearchLink,
	selectResearchLink,
} from '../../../store/slices/marketSnapshotSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';

const ResearchLinksSelection = () => {
	const { onAllowNext } = useMarketSnapshotContext();
	const dispatch = useAppDispatch();
	const { researchLinks, selectedLinks, researchTopic, reportId } =
		useAppSelector((s) => s.marketSnapshot);

	const handleChangeResearchLink = (link: LinkModel) => {
		if (selectedLinks?.map((l) => l.link).includes(link.link)) {
			dispatch(removeResearchLink(link));
		} else {
			dispatch(selectResearchLink(link));
		}
	};

	useEffect(() => {
		if (reportId) {
			dispatch(getMarketSnapshotShortlist({ reportId }));
		}
	}, [reportId]);

	useEffect(() => {
		if (selectedLinks && selectedLinks.length > 2) {
			onAllowNext(true);
		} else {
			onAllowNext(false);
		}
	}, [selectedLinks]);

	useEffect(() => {
		onAllowNext((researchLinks?.length ?? 0) >= 3);
	}, [researchLinks]);

	return (
    <div className="flex flex-col items-center w-full">
      <h3 className="mb-3 text-xl font-semibold">
        We found {researchLinks?.length} Research links for "{researchTopic}"
      </h3>
      <p className="mb-6">
        Deselect irrelevant selections to generate accurate results. At least 3
        links needed to generate a report
      </p>

      {!researchLinks || researchLinks.length < 10 ? (
        <Alert
          type="error"
          message="At least 10 articles needed to generate report, if links are not relevant please go back and update research topic and/or attributes"
          className="mb-6"
        />
      ) : null}

      <div className="grid grid-cols-1 gap-3 grid-flow-dense xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {researchLinks &&
          researchLinks.map((l) => (
            <OptionChoice
              selected={selectedLinks?.map((l) => l.link).includes(l.link)}
              className="items-start w-full"
              onChange={(e) => handleChangeResearchLink(l)}
            >
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col">
                  <h4 className="font-semibold">
                    {l.publisher} - {l.heading}
                  </h4>
                  <div className="flex flex-row items-center gap-2">
                    <TagIcon className="flex-shrink-0" />
                    <span>{l.keyword.map((k) => k).join(", ")}</span>
                  </div>
                </div>
              </div>
            </OptionChoice>
          ))}
      </div>
    </div>
  );
};

export default ResearchLinksSelection;
