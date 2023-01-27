import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FileIcon from '../icons/File';
import HomeIcon from '../icons/Home';
import LogoBetaIcon from '../icons/Wokelo Beta Logo';
import SettingsIcon from '../icons/Settings';

export type SidebarOptionProps = {
	icon?: React.ReactNode;
	onClick?: () => void;
	href?: string;
	selected?: boolean;
	className?: string;
};

const SidebarOption = ({
	icon,
	onClick,
	href,
	selected,
	className,
}: SidebarOptionProps) => (
	<Link
		onClick={() => onClick && onClick()}
		to={href ?? ''}
		className={`rounded-lg flex items-center justify-center w-[52px] h-10 ${
			selected ? 'bg-purpl' : ''
		} ${className}`}
	>
		{icon && icon}
	</Link>
);

export type SidebarProps = {
	className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div
			className={`z-50 flex-col items-center bg-dark-gray w-[100px] h-full hidden xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex ${className}`}
		>
			<Link to="/" className="mt-4">
				<LogoBetaIcon />
			</Link>

			<div className="flex flex-col items-center gap-6 mt-12">
				<SidebarOption
					icon={<HomeIcon className="text-white" />}
					href="/dashboard/workflows"
					selected={path.includes('/workflows')}
				/>

				<SidebarOption
					icon={<FileIcon className="text-white" />}
					href="/dashboard/reports"
					selected={path.includes('/reports')}
				/>

				{/* <SidebarOption
					icon={<SettingsIcon className="text-white" />}
					href="/dashboard/settings"
					selected={path.includes('/settings')}
				/> */}
			</div>
		</div>
	);
};

export default Sidebar;
