import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import BackArrowIcon from '../icons/BackArrow';
import NotificationIcon from '../icons/Notification';

const Navbar = () => {
	const location = useLocation();
	const { username } = useAppSelector((s) => s.auth);
	const currentPath = location.pathname.split('/').pop();

	return (
		<div className="flex fixed top-0 z-30 flex-row items-center justify-between bg-white w-full right-0 left-0 h-[65px] px-4 xs:px-4 sm:px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20 border-b border-gray-200 shadow-md shadow-gray-300/30 pl-4 xs:pl-4 sm:pl-4 md:pl-[140px] lg:pl-[140px] xl:pl-[140px] 2xl:pl-[140px]">
			{currentPath !== 'workflows' &&
			currentPath !== 'reports' &&
			currentPath !== 'settings' ? (
				<Link to="../" className="flex flex-row items-center gap-2">
					<BackArrowIcon />
					<span>Back</span>
				</Link>
			) : (
				<span></span>
			)}

			<div className="flex flex-row gap-4">
				{/* <button
					type="button"
					className="flex items-center justify-center rounded-full h-9 w-9"
				>
					<NotificationIcon />
				</button> */}

				<Link
					to="/dashboard/profile"
					className="flex items-center justify-center bg-orange-500 rounded-full h-9 w-9"
				>
					<span className="font-semibold text-white">
						{username ? username.charAt(0).toUpperCase() : 'U'}
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
