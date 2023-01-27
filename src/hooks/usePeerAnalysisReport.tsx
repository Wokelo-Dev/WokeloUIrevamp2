import useSWR from 'swr';
import { fetcher } from '../lib/axios';
import { PeerAnalysisReportInfoModel } from '../models/peer-analysis-report-info.model';

export default function usePeerAnalysisReport(reportId: number | null) {
	const { data, error, isLoading } = useSWR<{
		data: { info: PeerAnalysisReportInfoModel };
	}>(
		reportId ? `/peer_analysis/download_info/` : null,
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
