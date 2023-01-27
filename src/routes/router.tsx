import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import RouteError from '../pages/general/RouteError';
import WorkflowsPage from '../pages/workflows';
import MarketSnapshot from '../pages/workflows/market-snapshot';
import MarketSnapshotReportError from '../pages/workflows/market-snapshot/ReportError';
import CompanyDeepDiveReportError from '../pages/workflows/company-deep-dive/ReportError';
import Root from './root';
import LoginPage from '../pages/auth/Login';
import DashboardPage from '../pages/dashboard';
import RowDotsLoader from '../components/RowDotsLoader';
import PageNotFound from '../pages/general/PageNotFound';

// Company deep dive components
const CompanySearch = lazy(
	() => import('../pages/workflows/company-deep-dive/CompanySearch')
);
const CompanyDeepDive = lazy(
	() => import('../pages/workflows/company-deep-dive')
);
const AttributeSelection = lazy(
	() => import('../pages/workflows/company-deep-dive/AttributeSelection')
);
const DraftingReport = lazy(
	() => import('../pages/workflows/company-deep-dive/DraftingReport')
);
const ExtraAttributesSelection = lazy(
	() => import('../pages/workflows/company-deep-dive/ExtraAttributesSelection')
);
const PullSources = lazy(
	() => import('../pages/workflows/company-deep-dive/PullSources')
);
const ReportGenerated = lazy(
	() => import('../pages/workflows/company-deep-dive/ReportGenerated')
);

// Market snapshot components
const AttributeFetching = lazy(
	() => import('../pages/workflows/market-snapshot/AttributeFetching')
);
const MarketAttributeSelection = lazy(
	() => import('../pages/workflows/market-snapshot/AttributeSelection')
);
const DocumentProcessing = lazy(
	() => import('../pages/workflows/market-snapshot/DocumentProcessing')
);
const ResearchLinksSelection = lazy(
	() => import('../pages/workflows/market-snapshot/ResearchLinksSelection')
);
const ResearchTopicSelection = lazy(
	() => import('../pages/workflows/market-snapshot/ResearchTopicSelection')
);
const SelectSourceAnalysis = lazy(
	() => import('../pages/workflows/market-snapshot/SelectSourceAnalysis')
);
const MarketDraftingReport = lazy(
	() => import('../pages/workflows/market-snapshot/DraftingReport')
);
const MarketReportGenerated = lazy(
	() => import('../pages/workflows/market-snapshot/ReportGenerated')
);

const ReportsPage = lazy(() => import('../pages/reports'));

const ProfilePage = lazy(() => import('../pages/profile'));
const UserProfile = lazy(() => import('../pages/profile/UserProfile'));
const PasswordSettings = lazy(
	() => import('../pages/profile/PasswordSettings')
);
const EmployeeStatus = lazy(() => import('../pages/profile/EmployeeStatus'));
const UsageInformation = lazy(
	() => import('../pages/profile/UsageInformation')
);

const PeerAnalysis = lazy(() => import('../pages/workflows/peer-analysis'));
const PeerAnalysisCompanySearch = lazy(
	() => import('../pages/workflows/peer-analysis/CompanySearch')
);
const PeerAnalysisPullSources = lazy(
	() => import('../pages/workflows/peer-analysis/PullSources')
);
const PeerAnalysisReportGenerated = lazy(
	() => import('../pages/workflows/peer-analysis/ReportGenerated')
);

/**
 * Router configuration for the application.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
        errorElement: <RouteError />,
        children: [
          {
            path: "workflows",
            element: <Outlet />,
            errorElement: <RouteError />,
            children: [
              {
                index: true,
                element: <WorkflowsPage />,
                errorElement: <CompanyDeepDiveReportError />,
              },
              {
                path: "company-deep-dive",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <CompanyDeepDive />
                  </Suspense>
                ),
                errorElement: <CompanyDeepDiveReportError />,
                children: [
                  {
                    path: "company-search",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <CompanySearch />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                    index: true,
                  },
                  {
                    path: "attributes-selection",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <AttributeSelection />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                  },
                  {
                    path: "pull-sources",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <PullSources />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                  },
                  {
                    path: "extra-attributes-selection",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <ExtraAttributesSelection />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                  },
                  {
                    path: "drafting-report",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <DraftingReport />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                  },
                  {
                    path: "report-generated",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <ReportGenerated />
                      </Suspense>
                    ),
                    errorElement: <CompanyDeepDiveReportError />,
                  },
                  {
                    path: "error",
                    element: <CompanyDeepDiveReportError />,
                    errorElement: <RouteError />,
                  },
                ],
              },
              {
                path: "market-snapshot",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <MarketSnapshot />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
                children: [
                  {
                    path: "research-topic-selection",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <ResearchTopicSelection />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "attribute-fetching",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <AttributeFetching />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "attribute-selection",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <MarketAttributeSelection />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "select-source-analysis",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <SelectSourceAnalysis />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "document-processing",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <DocumentProcessing />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "research-link-selection",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <ResearchLinksSelection />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "drafting-report",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <MarketDraftingReport />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "report-generated",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <MarketReportGenerated />
                      </Suspense>
                    ),
                    errorElement: <MarketSnapshotReportError />,
                  },
                  {
                    path: "error",
                    element: <MarketSnapshotReportError />,
                    errorElement: <MarketSnapshotReportError />,
                  },
                ],
              },
              {
                path: "peer-analysis",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <PeerAnalysis />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
                children: [
                  {
                    path: "company-search",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <PeerAnalysisCompanySearch />
                      </Suspense>
                    ),
                  },
                  {
                    path: "pull-sources",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <PeerAnalysisPullSources />
                      </Suspense>
                    ),
                  },
                  {
                    path: "report-generated",
                    element: (
                      <Suspense fallback={<RowDotsLoader />}>
                        <PeerAnalysisReportGenerated />
                      </Suspense>
                    ),
                  },
                ],
              },
            ],
          },
          {
            path: "reports",
            element: (
              <Suspense fallback={<RowDotsLoader />}>
                <ReportsPage />
              </Suspense>
            ),
            errorElement: <MarketSnapshotReportError />,
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<RowDotsLoader />}>
                <ProfilePage />
              </Suspense>
            ),
            errorElement: <MarketSnapshotReportError />,
            children: [
              {
                path: "user-profile",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <UserProfile />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
              },
              {
                path: "password-settings",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <PasswordSettings />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
              },
              {
                path: "employee-status",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <EmployeeStatus />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
              },
              {
                path: "usage-information",
                element: (
                  <Suspense fallback={<RowDotsLoader />}>
                    <UsageInformation />
                  </Suspense>
                ),
                errorElement: <MarketSnapshotReportError />,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <MarketSnapshotReportError />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
