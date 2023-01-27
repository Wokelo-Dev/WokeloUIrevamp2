import { InputHTMLAttributes } from 'react';

export type InputFieldProps = {
	label?: string;
	error?: string | React.ReactNode | null;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ className, label, error, ...props }: InputFieldProps) => {
	return (
		<span className={`flex flex-col gap-3 ${className}`}>
			<label className="text-sm font-medium">{label}</label>
			<input
				className="rounded-lg disabled:text-gray-400 border text-sm transition-all focus:outline border-gray-300 shadow-sm bg-white outline-purpl focus:border-none text-black font-medium shadow-gray-300/30 hover:shadow-md px-3 py-2"
				{...props}
			></input>

			{error && (
				<span className="text-xs text-red-500 flex flex-row items-center gap-2">
					{error}
				</span>
			)}
		</span>
	);
};

export default InputField;
