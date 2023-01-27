import React from 'react';
import InfoIcon from './icons/Info';

export type AlertProps = {
	message: string;
	icon?: React.ReactNode;
	type?: 'error' | 'info' | 'default';
	className?: string;
	align?: 'start' | 'center' | 'end';
};

const Alert = ({
	message,
	icon,
	type,
	className,
	align = 'center',
}: AlertProps) => {
	switch (type) {
		case 'error':
			return (
				<div
					className={`text-sm font-regular py-3 w-full rounded-xl flex flex-row items-center ${
						align === 'start'
							? 'justify-start'
							: align === 'end'
							? 'justify-end'
							: 'justify-center'
					} gap-3 bg-red-500/20 text-red-500 ${className}`}
				>
					{icon ? icon : <InfoIcon />} {message}
				</div>
			);
		case 'info':
			return (
				<div
					className={`text-sm font-regular py-3 w-full rounded-xl flex flex-row items-center ${
						align === 'start'
							? 'justify-start'
							: align === 'end'
							? 'justify-end'
							: 'justify-center'
					} gap-3 bg-blue-500/20 text-blue-500 ${className}`}
				>
					{icon ? icon : <InfoIcon />} {message}
				</div>
			);
		case 'default':
			return (
				<div
					className={`text-sm font-regular py-3 w-full rounded-xl flex flex-row items-center ${
						align === 'start'
							? 'justify-start'
							: align === 'end'
							? 'justify-end'
							: 'justify-center'
					} gap-3 bg-gray-500/10 text-gray-500 ${className}`}
				>
					{icon ? icon : <InfoIcon />} {message}
				</div>
			);
		default:
			return null;
	}
};

export default Alert;
