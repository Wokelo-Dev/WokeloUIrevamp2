import { InputHTMLAttributes } from 'react';

export type CustomCheckboxProps =
	| {
			className?: string;
			size?: number;
			children: React.ReactNode;
	  }
	| InputHTMLAttributes<HTMLInputElement>;

const CustomCheckbox = ({
	className,
	size,
	children,
	...props
}: CustomCheckboxProps) => {
	return (
		<label className={className}>
			<input type="checkbox" className="hidden" {...props} />

			{children}
		</label>
	);
};

export default CustomCheckbox;
