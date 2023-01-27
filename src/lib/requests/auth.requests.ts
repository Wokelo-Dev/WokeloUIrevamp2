import { client } from '../fetch-client';

type ResponseType = { access: string; refresh: string };
type RequestType = { username: string; password: string };

export const postLogin = client.createRequest<ResponseType, RequestType>()({
	method: 'POST',
	endpoint: '/token/',
});
