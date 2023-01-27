import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ChevronDownIcon from './icons/ChevronDown';

export type DropdownProps = {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	title?: string;
};

const Dropdown = ({ children, icon, title }: DropdownProps) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className="flex flex-row items-center gap-2 p-3 border border-gray-200 rounded-lg min-w-[136px]">
					<span className="flex-shrink-0">{icon && icon}</span>

					<span className="flex-1 text-sm font-medium">{title}</span>

					<ChevronDownIcon />
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="z-10 bg-white flex rounded-lg mx-4 flex-col w-[300px] border border-gray-200 shadow-sm shadow-gray-300/30"
					sideOffset={5}
				>
					{children && children}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default Dropdown;
