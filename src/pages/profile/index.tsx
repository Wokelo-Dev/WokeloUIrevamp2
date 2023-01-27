import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CogSmIcon from '../../components/icons/CogSm';
import InfoSmIcon from '../../components/icons/InfoSm';
import LockIcon from '../../components/icons/Lock';
import UserSmIcon from '../../components/icons/UserSm';
import Tab from './components/Tab';

const ProfilePage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname.split('/').pop();

	useEffect(() => {
		if (currentPath === 'profile') {
			navigate('./user-profile');
		}
	}, [location, currentPath]);

	return (
		<div className="bg-[#FEFEFF] mx-auto h-full w-full xs:w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-4/5 flex flex-col pt-9">
			{/* Header */}
			<div className="flex flex-row items-center justify-between mb-5">
				<div className="flex flex-col items-start">
					<h2 className="mb-2 text-2xl font-semibold">Profile</h2>
					<p className="text-muted-dark-gray">
						Edit and change your details
					</p>
				</div>
			</div>

			{/* Tabs container */}
			<div className="flex flex-row items-center gap-3 w-full">
				<Link to="./user-profile" className="flex-1">
					<Tab
						icon={<UserSmIcon />}
						title="User Profile"
						active={currentPath === 'user-profile'}
					/>
				</Link>

				<Link to="./password-settings" className="flex-1">
					<Tab
						icon={<LockIcon />}
						title="Password Settings"
						active={currentPath === 'password-settings'}
					/>
				</Link>

				<Link to="./employee-status" className="flex-1">
					<Tab
						icon={<CogSmIcon />}
						title="Employee Status"
						active={currentPath === 'employee-status'}
					/>
				</Link>

				<Link to="./usage-information" className="flex-1">
					<Tab
						icon={<InfoSmIcon />}
						title="Usage Information"
						active={currentPath === 'usage-information'}
					/>
				</Link>
			</div>

			<div className="mt-6">
				<Outlet />
			</div>
		</div>
	);
};

export default ProfilePage;
