import React from 'react';
import { ClassNameType } from '../../../types/ClassNameType';

export type TabProps = {
	icon?: React.ReactNode;
	title: string;
	active?: boolean;
} & ClassNameType;

const Tab = ({ icon, title, className, active }: TabProps) => {
	return (
		<div
			className={`flex-1 flex flex-row items-center gap-3 rounded-lg  text-gray-500 ${
				active ? 'bg-gray-200' : ''
			} ${className} p-3`}
		>
			{icon && icon}
			<span className="font-medium">{title}</span>
		</div>
	);
};

export default Tab;
