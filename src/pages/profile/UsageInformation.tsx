import dayjs from 'dayjs';
import useUserDetails from '../../hooks/useUserDetails';

const UsageInformation = () => {
	const { user } = useUserDetails();

	return (
		<div className="rounded-xl border border-gray-200 px-5 py-3 bg-white flex flex-col">
			<h3 className="font-semibold text-base mb-3">Usage Information</h3>

			<span className="w-full border-b border-gray-200 h-[1px] mb-5"></span>

			<div className="flex flex-col">
				<div className="flex flex-col w-full gap-3 mb-3">
					<p className="text-sm font-semibold underline">
						{dayjs().format('MMMM YYYY')}
					</p>

					<div className="flex flex-row items-center w-full">
						<p className="w-1/2 text-left text-sm font-medium">
							Credits (opening balance) :{' '}
						</p>

						<p className="w-1/2 text-left text-sm font-medium text-purpl">
							{user?.credits_allowed}
						</p>
					</div>

					<div className="flex flex-row items-center w-full">
						<p className="w-1/2 text-left text-sm font-medium">
							Credits used (as of {dayjs().format('DD - MMM - YY')})
						</p>

						<p className="w-1/2 text-left text-sm font-medium text-purpl">
							{user?.credits_used}
						</p>
					</div>

					<div className="flex flex-row items-center w-full">
						<p className="w-1/2 text-left text-sm font-medium">
							Available credits :{' '}
						</p>

						<p className="w-1/2 text-left text-sm font-medium text-purpl">
							{user?.credits_available}
						</p>
					</div>

					<div className="flex flex-row items-center w-full">
						<p className="w-1/2 text-left text-sm font-medium">
							No. of reports generated:{' '}
						</p>

						<p className="w-1/2 text-left text-sm font-medium text-purpl">
							{user?.total_reports}
						</p>
					</div>
					<div className="flex flex-row items-center w-full">
						<p className="w-1/2 text-left text-sm font-medium">
							Total time saved:{' '}
						</p>

						<p className="w-1/2 text-left text-sm font-medium text-purpl">
							{user?.time_saved}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsageInformation;
