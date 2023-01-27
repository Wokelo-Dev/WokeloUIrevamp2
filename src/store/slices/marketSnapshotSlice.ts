import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../../lib/api';
import { AttributeModel } from '../../models/attribute.model';
import { LinkModel } from '../../models/link.model';

// export const SNAPSHOT_REPORT_ID = 'SNAPSHOT_REPORT_ID';
// export const SNAPSHOT_LOADING_PATH = 'SNAPSHOT_LOADING_PATH';
// export const SNAPSHOT_RESEARCH_TOPIC = 'SNAPSHOT_RESEARCH_TOPIC';

export interface MarketSnapshotState {
	researchTopic: string | null;
	recommendedAttributes: AttributeModel[] | null;
	otherAttributes: AttributeModel[] | null;
	attributesFetching: boolean;
	selectedAttributes: AttributeModel[] | null;
	wokeloSources: boolean;
	otherSources: boolean;
	sources: { name: string; type: 'file' | 'website' }[] | null;
	researchLinks: LinkModel[] | null;
	selectedLinks: LinkModel[] | null;
	reportId: number | null;
	processingSnapshot: boolean;
	generatingReport: boolean;
}

const initialState: MarketSnapshotState = {
	// researchTopic: localStorage.getItem(SNAPSHOT_RESEARCH_TOPIC),
	researchTopic: null,
	recommendedAttributes: null,
	otherAttributes: null,
	attributesFetching: false,
	selectedAttributes: null,
	wokeloSources: true,
	otherSources: false,
	sources: null,
	researchLinks: null,
	selectedLinks: null,
	// reportId: localStorage.getItem(SNAPSHOT_REPORT_ID)
	// 	? parseInt(localStorage.getItem(SNAPSHOT_REPORT_ID) ?? '0')
	// 	: null,
	// processingSnapshot: localStorage.getItem(SNAPSHOT_LOADING_PATH)
	// 	? localStorage.getItem(SNAPSHOT_LOADING_PATH) === 'document-processing'
	// 	: false,
	// generatingReport: localStorage.getItem(SNAPSHOT_LOADING_PATH)
	// 	? localStorage.getItem(SNAPSHOT_LOADING_PATH) === 'drafting-report'
	// 	: false,
	reportId: null,
	processingSnapshot: false,
	generatingReport: false,
};

export const getAttributes = createAsyncThunk(
	'marketSnapshot/getAttributes',
	async ({ query }: { query: string }) => {
		const response = await Api.getAttributes(query);
		return response!;
	}
);

export const postProcessMarketSnapshot = createAsyncThunk(
	'marketSnapshot/postProcessMarketSnapshot',
	async (
		{
			query,
			attributes,
			sources,
		}: {
			query: string;
			attributes: string[];
			sources: string[];
		},
		thunkApi
	) => {
		const state = thunkApi.getState() as any;
		thunkApi.dispatch(setProcessingSnapshot(true));
		if (!state.marketSnapshot?.processingSnapshot) {
			const data = await Api.processMarketSnapshot(query, attributes, sources);
			return data?.report_id;
		} else {
			return state.marketSnapshot?.reportId;
		}
	}
);

export const getMarketSnapshotShortlist = createAsyncThunk(
	'marketSnapshot/getMarketSnapshotShortlist',
	async ({ reportId }: { reportId: number }) => {
		if (reportId) {
			const data = await Api.getMarketSnapshotShortlist(reportId);
			return {
				reportId: data?.report_id,
				data: data?.data,
			};
		} else {
			return {
				reportId,
				data: null,
			};
		}
	}
);

export const generateMarketSnapshot = createAsyncThunk(
	'marketSnapshot/generateMarketSnapshot',
	async (
		{
			reportId,
			headings,
		}: {
			reportId: number;
			headings: LinkModel[];
		},
		thunkApi
	) => {
		const state = thunkApi.getState() as any;
		thunkApi.dispatch(setGeneratingReport(true));
		if (!state.marketSnapshot?.generatingReport) {
			const data = await Api.generateMarketSnapshot(reportId, headings);
			return data?.report_id;
		} else {
			return reportId;
		}
	}
);

export const marketSnapshotSlice = createSlice({
	name: 'marketSnapshot',
	initialState,
	reducers: {
		setResearchTopic: (state, action) => {
			state.researchTopic = action.payload;
		},
		setSelectedAttributes: (state, action) => {
			state.selectedAttributes = action.payload;
		},
		addSource: (state, action) => {
			if (!state.sources) {
				state.sources = [action.payload];
			} else {
				state.sources?.push(action.payload);
			}
		},
		removeSource: (state, action) => {
			const index =
				state.sources?.findIndex((s) => s.name === action.payload.name) ?? -1;
			if (index >= 0) {
				state.sources?.splice(index, 1);
			}
		},
		selectResearchLink: (state, action) => {
			if (!state.selectedLinks) {
				state.selectedLinks = [action.payload];
			} else {
				state.selectedLinks?.push(action.payload);
			}
		},
		removeResearchLink: (state, action) => {
			const index =
				state.selectedLinks?.findIndex((s) => s.link === action.payload.link) ??
				-1;
			if (index >= 0) {
				state.selectedLinks?.splice(index, 1);
			}
		},
		clearAttributes: (state) => {
			state.recommendedAttributes = null;
			state.otherAttributes = null;
			state.selectedAttributes = null;
		},
		clearReport: (state) => {
			state.reportId = null;
			// localStorage.removeItem(SNAPSHOT_REPORT_ID);
		},
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
		setWokeloSources: (state, action) => {
			state.wokeloSources = action.payload;
		},
		setOtherSources: (state, action) => {
			state.otherSources = action.payload;
		},
		clearMarketSnapshot: (state) => {
			state.researchTopic = null;
			state.recommendedAttributes = null;
			state.otherAttributes = null;
			state.attributesFetching = false;
			state.selectedAttributes = null;
			state.wokeloSources = true;
			state.otherSources = false;
			state.sources = null;
			state.researchLinks = null;
			state.selectedLinks = null;
			state.reportId = null;
			state.processingSnapshot = false;
			state.generatingReport = false;
		},
		setProcessingSnapshot: (state, action) => {
			state.processingSnapshot = action.payload;
		},
		setGeneratingReport: (state, action) => {
			state.generatingReport = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAttributes.pending, (state, action) => {
			state.attributesFetching = true;
			state.recommendedAttributes = null;
			state.otherAttributes = null;
		});
		builder.addCase(getAttributes.fulfilled, (state, action) => {
			state.recommendedAttributes = action.payload.recommended_attributes.map(
				(a) => ({ value: a })
			);
			state.otherAttributes = action.payload.other_attributes.map((a) => ({
				value: a,
			}));
			state.attributesFetching = false;
		});
		builder.addCase(postProcessMarketSnapshot.fulfilled, (state, action) => {
			state.reportId = action.payload ?? null;
			// localStorage.setItem(
			// 	SNAPSHOT_REPORT_ID,
			// 	action.payload?.toString() ?? ''
			// );
			// localStorage.setItem(SNAPSHOT_LOADING_PATH, 'document-processing');
		});
		builder.addCase(getMarketSnapshotShortlist.fulfilled, (state, action) => {
			state.researchLinks = action.payload.data ?? null;
			state.selectedLinks = action.payload.data ?? null;
		});
		builder.addCase(generateMarketSnapshot.fulfilled, (state, action) => {
			// localStorage.setItem(SNAPSHOT_LOADING_PATH, 'drafting-report');
		});
	},
});

export const {
	setResearchTopic,
	setSelectedAttributes,
	clearAttributes,
	addSource,
	removeSource,
	selectResearchLink,
	removeResearchLink,
	setReportId,
	clearReport,
	setWokeloSources,
	setOtherSources,
	clearMarketSnapshot,
	setProcessingSnapshot,
	setGeneratingReport,
} = marketSnapshotSlice.actions;

export default marketSnapshotSlice.reducer;
