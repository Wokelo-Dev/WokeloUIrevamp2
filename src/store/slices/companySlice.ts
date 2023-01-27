import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetcher } from '../../lib/axios';
import { CompanyDetailsModel } from '../../models/company-details.model';
import { CompanyModel } from '../../models/company.model';

export interface CompaniesListResponse {
	data: CompanyModel[];
}

export const getCompanies = createAsyncThunk(
	'company/getCompanies',
	async ({ name }: { name: string }) => {
		const response = await fetcher<CompaniesListResponse>(
			'/assets/get_company_list/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					name,
				},
			}
		);
		return response.data?.data;
	}
);

export const getCompanyDetails = createAsyncThunk(
	'company/getCompanyDetails',
	async ({ company }: { company: CompanyModel }) => {
		const formData = new FormData();
		formData.append('company_name', company.name);

		const response = await fetcher<any>(
			'/assets/get_company_details_from_name/',
			{
				method: 'POST',
				data: formData,
			}
		);

		const d = response.data?.data;

		return {
			name: company.name,
			logo: company.logo,
			permalink: d?.company_data?.permalink,
			website: d?.company_data?.website,
			description: d?.company_data?.short_description,
			legalName: d?.company_data?.legal_name,
			hq: d?.company_data?.location_identifiers,
			founded: d?.company_data?.year_founded,
			sector: d?.company_data?.industries,
			ownership: d?.company_data?.ipo_status,
			acquisitions:
				d?.company_data?.num_acquisitions.length === 0
					? 0
					: d?.company_data?.num_acquisitions,
			investments:
				d?.company_data?.num_investments.length === 0
					? 0
					: d?.company_data?.num_investments,
		} as CompanyDetailsModel;
	}
);

export const getCompanyInfo = createAsyncThunk(
	'company/getCompanyInfo',
	async ({ company }: { company: CompanyModel }) => {
		const formData = new FormData();
		formData.append('company_name', company.name);

		const response = await fetcher<any>('/assets/get_company_info/', {
			method: 'POST',
			data: formData,
		});

		const d = response.data?.data;

		return {
			name: company.name,
			logo: company.logo,
			permalink: d?.company_data?.permalink,
			website: d?.company_data?.website,
			description: d?.company_data?.short_description,
			legalName: d?.company_data?.legal_name,
			hq: d?.company_data?.location_identifiers,
			founded: d?.company_data?.year_founded,
			sector: d?.company_data?.industries,
			ownership: d?.company_data?.ipo_status,
			acquisitions:
				d?.company_data?.num_acquisitions.length === 0
					? 0
					: d?.company_data?.num_acquisitions,
			investments:
				d?.company_data?.num_investments.length === 0
					? 0
					: d?.company_data?.num_investments,
		} as CompanyDetailsModel;
	}
);

export interface CompanyState {
	companies: CompanyModel[] | null;
	companiesLoading: boolean;
	company: CompanyModel | null;
	companyDetails: CompanyDetailsModel | null;
	companyDetailsLoading: boolean;
}

const initialState: CompanyState = {
	companies: null,
	companiesLoading: false,
	company: null,
	companyDetails: null,
	companyDetailsLoading: false,
};

export const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		selectCompany: (state, action) => {
			state.company = action.payload;
		},
		clearCompany: (state) => {
			state.company = null;
			state.companyDetails = null;
			state.companyDetailsLoading = false;
			state.companies = null;
		},
		clearAll: (state) => {
			state.company = null;
			state.companyDetails = null;
			state.companyDetailsLoading = false;
			state.companies = null;
		},
		setCompaniesLoading: (state, action) => {
			state.companiesLoading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCompanies.pending, (state) => {
			state.companies = null;
			state.companiesLoading = true;
		});
		builder.addCase(getCompanies.fulfilled, (state, action) => {
			state.companies = action.payload;
			state.companiesLoading = false;
		});
		builder.addCase(getCompanies.rejected, (state) => {
			state.companies = null;
			state.companiesLoading = false;
		});
		builder.addCase(getCompanyDetails.pending, (state) => {
			state.companyDetails = null;
			state.companyDetailsLoading = true;
		});
		builder.addCase(getCompanyDetails.fulfilled, (state, action) => {
			state.companyDetails = action.payload;
			state.companyDetailsLoading = false;
		});
	},
});

export const { selectCompany, clearCompany, clearAll, setCompaniesLoading } =
	companySlice.actions;

export default companySlice.reducer;
