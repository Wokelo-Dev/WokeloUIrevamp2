import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import DownloadFileIcon from "../../components/icons/DownloadFile";
import FiltersIcon from "../../components/icons/Filters";
import PowerPointIcon from "../../components/icons/PowerPoint";
import ShareIcon from "../../components/icons/Share";
import WordIcon from "../../components/icons/Word";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { Api } from "../../lib/api";
import { NotificationService } from "../../lib/notification-service";
import { ReportModel } from "../../models/report.model";
import { setReportId as setReportIdCompanyDeepDive } from "../../store/slices/companyDeepDiveSlice";
import {
  setReportId as setReportIdMarketSnapshot,
  setResearchTopic,
} from "../../store/slices/marketSnapshotSlice";
import { getReports } from "../../store/slices/reportsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ChildrenType } from "../../types/ChildrenType";
import { ClassNameType } from "../../types/ClassNameType";
import SearchInput from "./components/SearchInput";

export type ChildrenAndClassnamesProps = ChildrenType & ClassNameType;

const Status = ({
  status,
  onClick,
}: {
  status: string;
  onClick?: () => void;
}) => {
  switch (status.toLowerCase()) {
    case "completed":
      return <span className="text-green-500">{status}</span>;
    case "action required":
      return (
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => onClick && onClick()}
        >
          {status}
        </span>
      );
    default:
      return <span>{status}</span>;
  }
};

const Th = ({ children, className }: ChildrenAndClassnamesProps) => (
  <th
    className={`py-2 text-sm font-semibold uppercase text-left text-gray-500 px-2 ${className}`}
  >
    {children}
  </th>
);

const Tr = ({ children, className }: ChildrenAndClassnamesProps) => (
  <tr className={`border-b border-gray-200 ${className}`}>{children}</tr>
);

const Td = ({ children, className }: ChildrenAndClassnamesProps) => (
  <td className={`text-xs py-7 align-top px-2 ${className}`}>{children}</td>
);

const ReportsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { reports } = useAppSelector((s) => s.reports);
  const [downloadModal, setDownloadModal] = useState(false);
  const [report, setReport] = useState<ReportModel | null>(null);
  const [shareModal, setShareModal] = useState(false);

  useEffect(() => {
    dispatch(getReports());
  }, []);

  const handleOnModalDismiss = () => {
    setReport(null);
    setDownloadModal(false);
  };

  const handleOnWillDownload = (report: ReportModel) => {
    setReport(report);
    setDownloadModal(true);
  };

  const handleDownload = async (type: "doc" | "ppt") => {
    try {
      if (report?.type === "Company Deep Dive" && type === "doc") {
        await Api.downloadRecentStrategyDoc(report?.id);
      } else if (report?.type === "Company Deep Dive" && type === "ppt") {
        await Api.downloadRecentStrategyPpt(report?.id);
      } else if (report?.type === "Market Snapshot" && type === "doc") {
        await Api.downloadMarketSnapshotDoc(report?.id);
      }else if(report?.type === "Peer Analysis" && type === "doc"){
        await Api.downloadPeerAnalysisDoc(report?.id);
      }else if(report?.type === "Peer Analysis" && type === "ppt"){
        await Api.downloadPeerAnalysisPpt(report?.id);
      }

    } catch (err) {
      if (err instanceof Error) {
        NotificationService.error(err.toString());
      }
    }
  };

  const handleOnJourneyRestore = async (report: ReportModel) => {
    switch (report.type) {
      case "Company Deep Dive":
        if (report) {
          dispatch(setReportIdCompanyDeepDive(report.id));
          navigate(
            "/dashboard/workflows/company-deep-dive/extra-attributes-selection"
          );
        }
        break;
      case "Market Snapshot":
        if (report) {
          dispatch(setReportIdMarketSnapshot(report.id));
          dispatch(setResearchTopic(report.title));
          navigate(
            "/dashboard/workflows/market-snapshot/research-link-selection"
          );
        }
        break;
    }
  };

  return (
    <>
      <div className="bg-[#FEFEFF] h-full px-10 w-full flex flex-col pt-9">
        <div className="flex flex-row justify-between w-full mb-7">
          <div className="flex flex-col items-start">
            <h2 className="mb-2 text-2xl font-semibold">Reports</h2>
            <p className="text-muted-dark-gray">
              Reports Generated: {reports?.length}
            </p>
          </div>

          {/* <div className="flex flex-row items-center gap-4">
            <SearchInput placeholder="Search..." className="w-[250px]" />
            <Dropdown title="Filters" icon={<FiltersIcon />}>
              <p className="p-4">No options</p>
            </Dropdown>
            <Dropdown title="Sort by" icon={<FiltersIcon />}>
              <p className="p-4">No options</p>
            </Dropdown>
          </div> */}
        </div>

        <table>
          <thead className="bg-gray-200">
            <Th className="w-[15%] pl-5">Report Title</Th>
            <Th className="w-[15%]">Report Type</Th>
            <Th className="w-[15%]">Metrics</Th>
            {/* <Th className="w-[15%]">Attributes</Th> */}
            <Th className="w-[15%]">Date</Th>
            <Th className="w-[15%]">Status</Th>
            <Th className="w-[15%]"></Th>
          </thead>
          <tbody>
            {reports &&
              reports
                .slice()
                .reverse()
                .map((r) => (
                  <Tr key={r.id}>
                    <Td className="pl-5">{r.title}</Td>
                    <Td>{r.type}</Td>
                    {r.status !== "Delayed" && (
                      <Td>
                        Words synthesized : {r.metrics.words_processed} <br />
                        Words generated : {r.metrics.words_generated} <br />
                        Time saved : {r.metrics.time_saved}
                      </Td>
                    )}
                    {r.status === "Delayed" && (
                      <Td>
                        Words synthesized : {r.metrics.words_processed} <br />
                        Words generated : {r.metrics.words_generated} <br />
                        Time saved : 0
                      </Td>
                    )}

                    {/* <Td>
										Partnerships : {0} <br />
										Acquisitions : {0} <br />
										Investment : {0}
									</Td> */}
                    <Td>
                      {dayjs(r.date).format("DD MMM YYYY")}{" "}
                      <span className="text-[10px]">
                        ({dayjs(r.date).format("HH:mm")})
                      </span>
                    </Td>
                    <Td>
                      <Status
                        status={r.status}
                        onClick={() => handleOnJourneyRestore(r)}
                      />
                    </Td>
                    <Td className="flex flex-row items-center gap-2">
                      <button
                        type="button"
                        className="border border-gray-200 disabled:text-gray-400 rounded-lg w-[36px] h-[34px] flex items-center justify-center"
                        onClick={() => handleOnWillDownload(r)}
                        disabled={
                          r.status === "In Progress" ||
                          r.status === "Delayed" ||
                          r.status === "No Data Found"
                        }
                      >
                        <DownloadFileIcon />
                      </button>

                      <button
                        type="button"
                        className="border border-gray-200 disabled:text-gray-400  rounded-lg w-[36px] h-[34px] flex items-center justify-center"
                        onClick={() => setShareModal(true)}
                        disabled={
                          r.status === "In Progress" ||
                          r.status === "Delayed" ||
                          r.status === "No Data Found"
                        }
                      >
                        <ShareIcon />
                      </button>
                    </Td>
                  </Tr>
                ))}
          </tbody>
        </table>
      </div>

      <Modal open={downloadModal} onClose={handleOnModalDismiss}>
        <div className="flex flex-col items-center">
          <h2 className="mb-3 text-2xl font-semibold">
            Download your research document
          </h2>

          <h2 className="mb-10 text-2xl font-semibold text-purpl">
            "{report?.title}"
          </h2>

          <button
            type="button"
            className="flex flex-row w-full gap-3 px-4 py-3 mb-5 transition-all bg-white border border-gray-300 rounded-lg shadow-sm shadow-gray-500/30 hover:shadow-lg"
            onClick={() => handleDownload("doc")}
          >
            <WordIcon />
            <span className="font-semibold">Download Word </span>
          </button>

          {report?.type !== "Market Snapshot" && (
            <button
              type="button"
              className="flex flex-row w-full gap-3 px-4 py-3 mb-5 transition-all bg-white border border-gray-300 rounded-lg shadow-sm shadow-gray-500/30 hover:shadow-lg"
              onClick={() => handleDownload("ppt")}
            >
              <PowerPointIcon />
              <span className="font-semibold">Download PPT </span>
            </button>
          )}
        </div>
      </Modal>

      <Modal open={shareModal} onClose={() => setShareModal(false)}>
        <div className="flex flex-col items-center">
          <h2 className="mb-3 text-2xl font-semibold">
            Share your research document
          </h2>

          <h2 className="mb-10 text-2xl font-semibold text-purpl">
            "Secured Access Service Edge"
          </h2>

          <Input placeholder="Enter email address to share" className="mb-4" />

          <Button className="flex items-center justify-center w-full">
            Share
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ReportsPage;
