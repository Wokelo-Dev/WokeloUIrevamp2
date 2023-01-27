import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export type Variant = 'default' | 'inverted';

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: { [K in Variant]: string } = {
	default: 'bg-dark-gray-700 text-white',
	inverted: 'bg-white text-black border border-black',
};

const Button = ({
	children,
	className,
	variant = 'default',
	...props
}: ButtonProps) => {
	return (
		<button
			className={`disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed font-semibold shadow-md hover:shadow-gray-500/30 transition-all shadow-gray-300/30 flex flex-row items-center gap-2 ${className} py-2 px-4 rounded-lg ${variants[variant]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
