import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ClassNameType } from '../types/ClassNameType';
import FileIcon from './icons/File';
import HomeIcon from './icons/Home';
import SettingsIcon from './icons/Settings';

export type BottomBarOptionProps = {
	icon?: React.ReactNode;
	selected?: boolean;
	href?: string;
	className?: string;
};

const BottomBarOption = ({
	icon,
	selected,
	href,
	className,
}: BottomBarOptionProps) => (
	<Link
		to={href ?? ''}
		className={`flex-1 w-full flex flex-col items-center ${className}`}
	>
		<span
			className={`rounded-lg flex flex-col items-center justify-center w-[52px] h-10 ${
				selected ? 'bg-purpl' : ''
			}`}
		>
			{icon && icon}
		</span>
	</Link>
);

const BottomBar = ({ className }: ClassNameType) => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div
			className={`flex-row shadow-sm shadow-gray-300/30 z-10 fixed bottom-0 items-center bg-dark-gray h-[65px] w-full flex xs:flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden ${className}`}
		>
			<BottomBarOption
				icon={<HomeIcon className="text-white" />}
				href="/dashboard/workflows"
				selected={path.includes('workflows')}
			/>

			<BottomBarOption
				icon={<FileIcon className="text-white" />}
				href="/dashboard/reports"
				selected={path.includes('reports')}
			/>

			{/* <BottomBarOption
				icon={<SettingsIcon className="text-white" />}
				href="/dashboard/settings"
				selected={path.includes('settings')}
			/> */}
		</div>
	);
};

export default BottomBar;
