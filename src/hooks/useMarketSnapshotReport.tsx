import useSWR from 'swr';
import { fetcher } from '../lib/axios';
import { MarketSnapshotReportInfoModel } from '../models/market-snapshot-report-info.model';

export default function useMarketSnapshotReport(reportId: number | null) {
	const { data, error, isLoading } = useSWR<{
		data: { info: MarketSnapshotReportInfoModel };
	}>(
		reportId ? `/market_snapshot/download_info/` : null,
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
