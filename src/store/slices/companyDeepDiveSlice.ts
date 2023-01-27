import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../../lib/api';
import { CompanyDetailsModel } from '../../models/company-details.model';
import { PostArticleModel } from '../../models/post-article.model';
import {
	DefaultAttribute,
	SecondaryAttribute,
} from '../../pages/workflows/company-deep-dive/AttributeSelection';

// export const REPORT_ID = 'REPORT_ID';
// export const LOADING_PATH = 'LOADING_PATH';

export const postProcessRecentStrategy = createAsyncThunk(
	'companyDeepDive/postProcessRecentStrategy',
	async (
		{
			name,
			permalink,
			keywords,
		}: {
			name: string;
			permalink: string;
			keywords: string[];
		},
		thunkApi
	) => {
		const state = thunkApi.getState() as any;
		if (!state.companyDeepDive?.pullingSources) {
			thunkApi.dispatch(setPullingSources(true));
			const data = await Api.processRecentStrategy(name, permalink, keywords);
			return data?.report_id;
		} else {
			return state.companyDeepDive?.reportId;
		}
	}
);

export const getTaskStatus = createAsyncThunk(
	'companyDeepDive/getTaskStatus',
	async ({ reportId }: { reportId: number }) => {
		const data = await Api.getTaskStatus(reportId);
		return {
			reportId: data?.report_id,
			status: data?.status,
		};
	}
);

export const getRecentStrategyShortlist = createAsyncThunk(
	'companyDeepDive/getRecentStrategyShortlist',
	async ({ reportId }: { reportId: number }) => {
		const data = await Api.getRecentStrategyShortlist(reportId);
		return {
			reportId: data?.report_id,
			acquisitionData: data?.acquisition_data ?? null,
			investmentData: data?.investment_data ?? null,
			partnershipData: data?.partnership_data ?? null,
		};
	}
);

export const generateRecentStrategy = createAsyncThunk(
	'companyDeepDive/generateRecentStrategy',
	async (
		{
			reportId,
			investmentArticles,
			partnershipArticles,
			acquisitionArticles,
		}: {
			reportId: number;
			investmentArticles: PostArticleModel[] | null;
			partnershipArticles: PostArticleModel[] | null;
			acquisitionArticles: PostArticleModel[] | null;
		},
		thunkApi
	) => {
		const state = thunkApi.getState() as any;
		if (!state.companyDeepDive?.generatingReport) {
			thunkApi.dispatch(setGeneratingReport(true));
			const data = await Api.generateRecentStrategy(
				reportId,
				investmentArticles,
				partnershipArticles,
				acquisitionArticles
			);
			return {
				reportId: data?.report_id,
			};
		} else {
			return reportId;
		}
	}
);

export interface CompanyDeepDiveState {
	selectedCompany: CompanyDetailsModel | null;
	defaultAttributes: DefaultAttribute[];
	secondaryAttributes: SecondaryAttribute[] | null;
	acquisitionArticles: PostArticleModel[] | null;
	selectedAcquisitionArticles: PostArticleModel[] | null;
	investmentArticles: PostArticleModel[] | null;
	selectedInvestmentArticles: PostArticleModel[] | null;
	partnershipArticles: PostArticleModel[] | null;
	selectedPartnershipArticles: PostArticleModel[] | null;
	reportId: number | null;
	reportStatus: string | null;
	pullingSources: boolean;
	generatingReport: boolean;
}

const initialState: CompanyDeepDiveState = {
	selectedCompany: null,
	defaultAttributes: ['overview'],
	secondaryAttributes: null,
	acquisitionArticles: null,
	selectedAcquisitionArticles: null,
	investmentArticles: null,
	selectedInvestmentArticles: null,
	partnershipArticles: null,
	selectedPartnershipArticles: null,
	// reportId: localStorage.getItem(REPORT_ID)
	// 	? parseInt(localStorage.getItem(REPORT_ID) ?? '0')
	// 	: null,
	reportId: null,
	reportStatus: null,
	// pullingSources: localStorage.getItem(LOADING_PATH)
	// 	? localStorage.getItem(LOADING_PATH) === 'pulling-sources'
	// 	: false,
	pullingSources: false,
	// generatingReport: localStorage.getItem(LOADING_PATH)
	// 	? localStorage.getItem(LOADING_PATH) === 'drafting-report'
	// 	: false,
	generatingReport: false,
};

export const companyDeepDiveSlice = createSlice({
	name: 'companyDeepDive',
	initialState,
	reducers: {
		setSelectedCompany: (state, action) => {
			state.selectedCompany = action.payload;
		},
		setDefaultAttributes: (state, action) => {
			state.defaultAttributes = action.payload;
		},
		setSecondaryAttributes: (state, action) => {
			state.secondaryAttributes = action.payload;
		},
		clearReport: (state) => {
			state.reportId = null;
			state.reportStatus = null;
			// localStorage.removeItem(REPORT_ID);
		},
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
		setSelectedAcquisitionArticles: (state, action) => {
			state.selectedAcquisitionArticles = action.payload;
		},
		setSelectedInvestmentArticles: (state, action) => {
			state.selectedInvestmentArticles = action.payload;
		},
		setSelectedPartnershipArticles: (state, action) => {
			state.selectedPartnershipArticles = action.payload;
		},
		clearCompanyDeepDive: (state: any) => {
			state.selectedCompany = null;
			state.defaultAttributes = ['overview'];
			state.secondaryAttributes = null;
			state.acquisitionArticles = null;
			state.selectedAcquisitionArticles = null;
			state.investmentArticles = null;
			state.selectedInvestmentArticles = null;
			state.partnershipArticles = null;
			state.selectedPartnershipArticles = null;
			state.reportId = null;
			state.reportStatus = null;
			state.pullingSources = false;
			state.generatingReport = false;
		},
		setPullingSources: (state, action) => {
			state.pullingSources = action.payload;
		},
		setGeneratingReport: (state, action) => {
			state.generatingReport = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(postProcessRecentStrategy.fulfilled, (state, action) => {
			state.reportId = action.payload ?? null;
			// localStorage.setItem(REPORT_ID, action.payload?.toString() ?? '');
			// localStorage.setItem(LOADING_PATH, 'pull-sources');
		});
		builder.addCase(getTaskStatus.fulfilled, (state, action) => {
			state.reportStatus = action.payload.status ?? null;
		});
		builder.addCase(getRecentStrategyShortlist.fulfilled, (state, action) => {
			state.acquisitionArticles = action.payload.acquisitionData ?? null;
			state.selectedAcquisitionArticles =
				action.payload.acquisitionData ?? null;
			state.investmentArticles = action.payload.investmentData ?? null;
			state.selectedInvestmentArticles = action.payload.investmentData ?? null;
			state.partnershipArticles = action.payload.partnershipData ?? null;
			state.selectedPartnershipArticles =
				action.payload.partnershipData ?? null;
		});
	},
});

export const {
	setSelectedCompany,
	setDefaultAttributes,
	setSecondaryAttributes,
	clearReport,
	setReportId,
	setSelectedAcquisitionArticles,
	setSelectedInvestmentArticles,
	setSelectedPartnershipArticles,
	clearCompanyDeepDive,
	setPullingSources,
	setGeneratingReport,
} = companyDeepDiveSlice.actions;

export default companyDeepDiveSlice.reducer;
