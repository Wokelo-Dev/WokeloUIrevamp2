import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetcher } from './lib/axios';
import axios, { AxiosError } from 'axios';

// Configure axios to use access token from store.
fetcher.interceptors.request.use(
	async (config) => {
		const accessToken = store.getState().auth.access;

		if (accessToken) {
			config.headers = {
				Authorization: `Bearer ${accessToken}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};
		} else {
			config.headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};
		}

		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

fetcher.interceptors.response.use(
	async (config) => {
		return config;
	},
	(error: Error | AxiosError) => {
		// Redirect to login when unauthenticated status is returned from server.
		if (axios.isAxiosError(error) && error.response?.status === 401) {
			localStorage.clear();
			window.location.href = '/login';
		} else {
			Promise.reject(error);
		}
	}
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
