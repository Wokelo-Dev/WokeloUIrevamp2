import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetcher } from '../../lib/axios';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const USERNAME = 'USERNAME';

export interface LoginResponse {
	access: string;
	refresh: string;
}

export const performLogin = createAsyncThunk(
	'auth/performLogin',
	async ({
		username,
		password,
		redirect,
	}: {
		username: string;
		password: string;
		redirect?: string;
	}) => {
		const response = await fetcher<LoginResponse>('/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				username,
				password,
			},
		});
		return { ...response.data, username, redirect };
	}
);

export interface AuthState {
	access: string | null;
	refresh: string | null;
	username: string | null;
}

const initialState: AuthState = {
	access: localStorage.getItem(ACCESS_TOKEN),
	refresh: localStorage.getItem(REFRESH_TOKEN),
	username: localStorage.getItem(USERNAME),
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(performLogin.fulfilled, (state, action) => {
			state.access = action.payload.access;
			state.refresh = action.payload.refresh;
			state.username = action.payload.username;
			localStorage.setItem(ACCESS_TOKEN, action.payload.access);
			localStorage.setItem(REFRESH_TOKEN, action.payload.refresh);
			localStorage.setItem(USERNAME, action.payload.username);
			if (action.payload.redirect) {
				location.href = action.payload.redirect;
			}
		});
	},
});

export default authSlice.reducer;
