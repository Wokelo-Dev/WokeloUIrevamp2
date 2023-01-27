import { InputHTMLAttributes, useState } from 'react';
import EyeIcon from '../../../components/icons/Eye';
import EyeDisabledIcon from '../../../components/icons/EyeDisabled';

export type PasswordFieldProps = {
	label?: string;
	error?: string | null;
} & InputHTMLAttributes<HTMLInputElement>;

const PasswordField = ({
	className,
	label,
	error,
	...props
}: PasswordFieldProps) => {
	const [show, setShow] = useState(false);

	return (
		<span className={`flex flex-col gap-3 ${className}`}>
			<label className="text-sm font-medium">{label}</label>

			<div className="relative w-full">
				<input
					className="rounded-lg w-full border transition-all text-sm focus:outline border-gray-300 shadow-sm bg-white outline-purpl focus:border-none text-black font-medium shadow-gray-300/30 hover:shadow-md px-3 py-2"
					type={show ? 'text' : 'password'}
					{...props}
				></input>

				<button
					type="button"
					className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2"
					onClick={() => setShow(!show)}
				>
					{show ? <EyeDisabledIcon /> : <EyeIcon />}
				</button>
			</div>

			{error && <span className="text-xs text-red-500">{error}</span>}
		</span>
	);
};

export default PasswordField;
