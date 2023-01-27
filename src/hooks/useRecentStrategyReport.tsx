import useSWR from 'swr';
import { fetcher } from '../lib/axios';
import { RecentStrategyReportInfoModel } from '../models/recent-strategy-report-info.model';

export default function useRecentStrategyReport(reportId: number | null) {
	const { data, error, isLoading } = useSWR<{
		data: { info: RecentStrategyReportInfoModel };
	}>(
		reportId ? `/recent_strategy/download_info/` : null,
		(url) =>
			fetcher(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				data: {
					report_id: reportId,
				},
			}),
		{
			refreshInterval: 0,
		}
	);

	return {
		info: data?.data?.info,
		isLoading,
		isError: error,
	};
}
