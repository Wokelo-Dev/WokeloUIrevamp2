import { TextareaHTMLAttributes, useRef } from 'react';

export type TextAreaProps = {
	onClear?: () => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className, onClear, ...props }: TextAreaProps) => {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	return (
		<div className={`relative w-full flex flex-row ${className}`}>
			<textarea
				ref={inputRef}
				className={`scrollbar-thin scrollbar-track-white scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 rounded-md bg-white w-full placeholder:text-gray-500 outline-purpl border-gray-300 focus:outline transition-all px-5 py-3 border shadow-sm shadow-gray-500/30 hover:shadow-md`}
				{...props}
			></textarea>
		</div>
	);
};

export default TextArea;
