import axios from 'axios';

export const fetcher = axios.create({
  baseURL: "https://wkprod.eastus.cloudapp.azure.com/api",
  // baseURL: "https://wokelo-dev.eastus.cloudapp.azure.com/api",
  // import.meta.env.DEV
  // 	? import.meta.env.VITE_API_ENDPOINT_DEV
  // 	: import.meta.env.VITE_API_ENDPOINT_PROD,
});

// const refreshToken = async () => {
// 	const token = localStorage.getItem(ACCESS_TOKEN);

// 	try {
// 		const response = await fetcher.post('/user/refresh', {
// 			refreshToken: session?.refreshToken,
// 		});

// 		const { session } = response.data;

// 		if (!session?.accessToken) {
// 			localStorage.removeItem('session');
// 			localStorage.removeItem('user');
// 		}

// 		localStorage.setItem('session', JSON.stringify(session));

// 		return session;
// 	} catch (error) {
// 		localStorage.removeItem('session');
// 		localStorage.removeItem('user');
// 	}
// };
