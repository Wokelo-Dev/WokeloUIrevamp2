import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../../lib/api';
import { CompanyModel } from '../../models/company.model';

export const processPeerAnalysis = createAsyncThunk(
	'peerAnalysis/processPeerAnalysis',
	async (
		{
			companies,
			title,
		}: {
			companies: string[];
			title: string;
		},
		thunkApi
	) => {
		const state = thunkApi.getState() as any;
		if (!state.peerAnalysis?.pullingSources) {
			thunkApi.dispatch(setPullingSources(true));
			const data = await Api.processPeerAnalysis(companies, title);
			return data?.report_id;
		} else {
			return state.peerAnalysis?.reportId;
		}
	}
);

export interface PeerAnalysisState {
	selectedCompanies: CompanyModel[] | null;
	reportId: number | null;
	pullingSources: boolean;
	analysisName: string | null;
}

const initialState: PeerAnalysisState = {
	selectedCompanies: null,
	reportId: null,
	pullingSources: false,
	analysisName: null,
};

export const peerAnalysisSlice = createSlice({
	name: 'peerAnalysis',
	initialState,
	reducers: {
		setSelectedCompanies: (state, action) => {
			state.selectedCompanies = action.payload;
		},
		addCompany: (state, action) => {
			if (
				state.selectedCompanies?.find(
					(sc) => sc.permalink === action.payload.permalink
				)
			) {
				return;
			}

			if (state.selectedCompanies) {
				state.selectedCompanies.push(action.payload);
			} else {
				state.selectedCompanies = [action.payload];
			}
		},
		removeCompany: (state, action) => {
			state.selectedCompanies?.splice(
				state.selectedCompanies.findIndex(
					(c) => c.permalink === action.payload.permalink
				),
				1
			);
		},
		setAnalysisName: (state, action) => {
			state.analysisName = action.payload;
		},
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
		setPullingSources: (state, action) => {
			state.pullingSources = action.payload;
		},
		clearPeerAnalysis: (state) => {
			state.selectedCompanies = null;
			state.reportId = null;
			state.pullingSources = false;
			state.analysisName = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(processPeerAnalysis.fulfilled, (state, action) => {
			state.reportId = action.payload ?? null;
		});
	},
});

export const {
	setSelectedCompanies,
	addCompany,
	removeCompany,
	setReportId,
	setPullingSources,
	setAnalysisName,
	clearPeerAnalysis,
} = peerAnalysisSlice.actions;

export default peerAnalysisSlice.reducer;
