import { client } from '../fetch-client';

type ResponseType = { access: string; refresh: string };
type RequestType = { username: string; password: string };

export const getCompanies = client.createRequest<ResponseType, RequestType>()({
	method: 'POST',
	endpoint: '/assets/get_company_list/',
});
