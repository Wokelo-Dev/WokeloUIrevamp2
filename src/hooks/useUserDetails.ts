import useSWR from 'swr';
import { fetcher } from '../lib/axios';
import { UserModel } from '../models/user.model';

export default function useUserDetails() {
	const { data, error, isLoading } = useSWR<{
		data: UserModel;
	}>(`/accounts/user_detail`, fetcher, {
		refreshInterval: 0,
	});

	return {
		user: data?.data,
		isLoading,
		isError: error,
	};
}
