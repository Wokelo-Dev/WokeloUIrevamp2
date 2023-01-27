import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../../lib/api';
import { ReportModel } from '../../models/report.model';

export const getReports = createAsyncThunk('reports/getReports', async () => {
	const data = await Api.getReports();
	return data;
});

export interface ReportsState {
	reports: ReportModel[] | null;
	loading: boolean;
}

const initialState: ReportsState = {
	reports: null,
	loading: false,
};

export const reportsSlice = createSlice({
	name: 'reports',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getReports.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getReports.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(getReports.fulfilled, (state, action) => {
			state.reports = action.payload ?? [];
			state.loading = false;
		});
	},
});

export default reportsSlice.reducer;
