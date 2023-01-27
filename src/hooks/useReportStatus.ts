import useSWR from 'swr';
import { ReportStatus } from '../constants/report-status.constants';
import { fetcher } from '../lib/axios';
// import { SNAPSHOT_LOADING_PATH } from '../store/slices/marketSnapshotSlice';

export default function useReportStatus(reportId: number) {
	const { data, error, isLoading } = useSWR<{
		data: { status: ReportStatus; comment: string };
	}>(
		reportId > 0 ? `/assets/get_report_status/?report_id=${reportId}` : null,
		fetcher,
		{
			refreshInterval: 5000,
		}
	);

	return {
		reportStatus: data?.data?.status,
		comment: data?.data?.comment,
		// step: localStorage.getItem(SNAPSHOT_LOADING_PATH),
		isLoading,
		isError: error,
	};
}
