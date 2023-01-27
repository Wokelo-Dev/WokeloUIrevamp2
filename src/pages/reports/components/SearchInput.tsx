import React, { InputHTMLAttributes, useRef } from 'react';
import SearchIcon from '../../../components/icons/Search';

const SearchInput = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className={`relative inline-block w-full ${className}`}>
			<input
				ref={inputRef}
				className={`rounded-md bg-white w-full placeholder:text-gray-500 outline-purpl border-gray-200 focus:outline transition-all min-h-[46px] pr-3 pl-8 border hover:shadow-md text-sm`}
				{...props}
			></input>

			<span className="absolute -translate-y-1/2 top-1/2 left-3">
				<SearchIcon />
			</span>
		</div>
	);
};

export default SearchInput;
