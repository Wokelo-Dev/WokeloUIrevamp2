import { InputHTMLAttributes, useRef } from 'react';
import { ObjectUtils } from '../utils/ObjectUtils';
import CrossIcon from './icons/Cross';

export type InputProps = {
	onClear?: () => void;
	clearable?: boolean;
	end?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
	className,
	onClear,
	clearable,
	end,
	...props
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClear = () => {
		inputRef.current!.value = '';
		onClear && onClear();
	};

	const canClear = !ObjectUtils.isNullOrUndefined(clearable)
		? clearable
		: true;

	return (
		<div className={`relative w-full flex flex-row ${className}`}>
			<input
				ref={inputRef}
				className={`rounded-md bg-white w-full placeholder:text-gray-500 outline-purpl border-gray-300 focus:outline transition-all px-5 py-3 border shadow-sm shadow-gray-500/30 hover:shadow-md`}
				{...props}
			></input>

			{canClear &&
			inputRef.current?.value.length &&
			inputRef.current?.value.length > 0 ? (
				<button
					type="button"
					onClick={handleClear}
					className="absolute flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full top-[14px] right-4"
				>
					<CrossIcon />
				</button>
			) : null}

			{!canClear && end ? (
				<div className="absolute right-0">{end}</div>
			) : null}
		</div>
	);
};

export default Input;
