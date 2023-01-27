import { ArticleModel } from '../models/article.model';
import { InvestmentArticleModel } from '../models/investment-article.model';
import { LinkModel } from '../models/link.model';
import { PostArticleModel } from '../models/post-article.model';
import { ReportModel } from '../models/report.model';
import { FormatUtils } from '../utils/FormatUtils';
import { ApiUser } from './api.user';
import { fetcher } from './axios';
import { NotificationService } from './notification-service';

export const Api = {
	async searchResearchTopics(search: string) {
		try {
			const response = await fetcher<{ suggestions: string[] }>(
				`/market_snapshot/autocomplete/?query=${search}`
			);
			return response.data?.suggestions ?? [];
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async getAttributes(search: string) {
		try {
			const response = await fetcher<{
				classification: string;
				recommended_attributes: string[];
				other_attributes: string[];
			}>(`/market_snapshot/classify/?query=${search}`);
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async getReports() {
		try {
			const response = await fetcher<{ [reportId: string]: ReportModel }>(
				`/accounts/reports/`
			);
			const reports = response.data;
			let transformed: ReportModel[] = [];
			for (const k of Object.keys(reports)) {
				transformed.push({
					...reports[k],
					id: parseInt(k),
				});
			}
			return transformed;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	/**
	 * Starts the processing of the report.
	 *
	 * @param name is the name of the company
	 * @param permalink is the permalink of the company
	 * @param keywords a list of keywords for searching
	 * @returns the response (a report id)
	 */
	async processRecentStrategy(
		name: string,
		permalink: string,
		keywords: string[]
	) {
		try {
			const response = await fetcher<{
				report_id: number;
			}>(`/recent_strategy/process/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					name,
					permalink,
					selected_keywords: keywords,
				},
			});
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	/**
	 * Gets the status of a current report.
	 *
	 * @param reportId is the rpeort id
	 * @returns the status of the report
	 */
	async getTaskStatus(reportId: number) {
		try {
			const response = await fetcher<{
				report_id: number;
				status: string;
			}>(`/assets/get_report_status/?report_id=${reportId}`);
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async getRecentStrategyShortlist(reportId: number) {
		try {
			const response = await fetcher<{
				report_id: number;
				partnership_data?: ArticleModel[];
				investment_data?: InvestmentArticleModel[];
				acquisition_data?: ArticleModel[];
			}>(`/recent_strategy/shortlist/?report_id=${reportId}`);
			return {
        ...response.data,
        partnership_data: response.data.partnership_data?.map((i) => ({
          company: i.company,
          title: i.title,
          url: i.url,
        })),
        investment_data: response.data.investment_data?.map((i) => ({
          company: i.company,
          title: i.title,
          url: i.link,
        })),
        acquisition_data: response.data.acquisition_data?.map((i) => ({
          company: i.title,
          title: i.title,
          url: i.url,
        })),
      };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	/**
	 * Starts the generation of the report after requesting article selection from user.
	 *
	 * @param reportId is the report id
	 * @param investmentArticles these are the investment articles to send
	 * @param partnershipArticles these are the partnership articles to send
	 * @param acquisitionArticles these are the acquisition articles to send
	 * @returns
	 */
	async generateRecentStrategy(
		reportId: number,
		investmentArticles: PostArticleModel[] | null,
		partnershipArticles: PostArticleModel[] | null,
		acquisitionArticles: PostArticleModel[] | null
	) {
		try {
			const response = await fetcher<{
				report_id: number;
			}>(`/recent_strategy/generate/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
					investment_data: investmentArticles,
					partnership_data: partnershipArticles,
					acquisition_data: acquisitionArticles,
				},
			});
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async downloadRecentStrategyDoc(reportId: number) {
		try {
			const response = await fetcher(`/recent_strategy/download_doc/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);
			const link = document.createElement('a');

			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async downloadRecentStrategyPpt(reportId: number) {
		try {
			const response = await fetcher(`/recent_strategy/download_ppt/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);
			const link = document.createElement('a');

			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async downloadMarketSnapshotDoc(reportId: number) {
		try {
			const response = await fetcher(`/market_snapshot/download_doc/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);
			const link = document.createElement('a');
			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async downloadMarketSnapshotPpt(reportId: number) {
		try {
			const response = await fetcher(`/market_snapshot/download_ppt/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);

			const link = document.createElement('a');
			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			console.error(err);
		}
	},

	async downloadPeerAnalysisDoc(reportId: number) {
		try {
			const response = await fetcher(`/peer_analysis/download_doc/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);
			const link = document.createElement('a');

			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async downloadPeerAnalysisPpt(reportId: number) {
		try {
			const response = await fetcher(`/peer_analysis/download_ppt/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
				},
				responseType: 'blob',
			});
			const contentDisposition = response.headers['content-disposition'];
			const filename = FormatUtils.getFilenameFromHeader(
				contentDisposition ?? ''
			);
			const href = URL.createObjectURL(response.data);
			const link = document.createElement('a');

			link.href = href;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
			return { filename };
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	/**
	 * Starts the processing of a market snapshot
	 *
	 * @param query is the query for the processing
	 * @param attributes is the attribute array
	 * @param sources is the sources array
	 * @returns
	 */
	async processMarketSnapshot(
		query: string,
		attributes: string[],
		sources: string[]
	) {
		try {
			const response = await fetcher(`/market_snapshot/process/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					search_query: query,
					attributes,
					sources,
				},
			});
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async getMarketSnapshotShortlist(reportId: number) {
		try {
			const response = await fetcher<{
				report_id: number;
				data: LinkModel[];
			}>(`/market_snapshot/shortlist/?report_id=${reportId}`);
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	/**
	 * Starts the generation of a market snapshot.
	 *
	 * @param reportId is the report associated
	 * @param headings is the list of links to be processed
	 * @returns
	 */
	async generateMarketSnapshot(reportId: number, headings: LinkModel[]) {
		try {
			const response = await fetcher(`/market_snapshot/generate/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					report_id: reportId,
					headings: headings,
				},
			});
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	async processPeerAnalysis(companies: string[], title: string) {
		try {
			const response = await fetcher(`/peer_analysis/process/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					list_companies: companies,
					title,
					metaInfo: '',
					attributes: ['overview'],
				},
			});
			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				NotificationService.error(err.toString());
			}
		}
	},

	user: ApiUser,
};
