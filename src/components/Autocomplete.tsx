import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useOnClickOutside from '../hooks/useOnClickOutside';
import Input from './Input';

export interface AutocompleteOption {
	value: string;
	label?: string;
	element?: React.ReactNode;
}

export type AutocompleteProps = {
	options?: AutocompleteOption[];
	onSearch?: (term: string) => void;
	onOptionSelect?: (option: AutocompleteOption) => void;
	onOptionClear?: () => void;
	debounceTime?: number;
	header?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Option = ({
	option,
	onClick,
}: {
	option: AutocompleteOption;
	onClick: () => void;
}) => {
	if (option.element && !option.label) {
		return <span onClick={onClick}>{option.element}</span>;
	} else {
		return <span onClick={onClick}>{option?.label}</span>;
	}
};

const Autocomplete = ({
	options,
	onInput,
	onSearch,
	debounceTime,
	onOptionSelect,
	onOptionClear,
	header,
	value,
	...props
}: AutocompleteProps) => {
	const [search, setSearch] = useState('');
	const [open, setOpen] = useState(false);
	const debouncedSearch = useDebounce(search, debounceTime ?? 0);
	const ref = useRef(null);
	const [shouldBlock, setShouldBlock] = useState(false);

	useOnClickOutside(ref, () => setOpen(false));

	const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
		setSearch(e.currentTarget.value);
		onInput && onInput(e);
		setOpen(false);
	};

	const handleOnOptionClick = (option: AutocompleteOption) => {
		setOpen(false);
		setSearch(option.value);
		setShouldBlock(true);
		onOptionSelect && onOptionSelect(option);
	};

	const handleOnInputClick = (e: any) => {
		if (options && options.length > 0 && open === false) {
			setOpen(true);
		}
		props.onClick && props.onClick(e);
	};

	const handleOnClear = () => {
		setSearch('');
		onOptionClear && onOptionClear();
	};

	useEffect(() => {
		if (shouldBlock) {
			setShouldBlock(false);
		} else {
			onSearch && onSearch(debouncedSearch);
		}
	}, [debouncedSearch]);

	useEffect(() => {
		if (options && options.length > 0) {
			setOpen(true);
		}
	}, [options]);

	return (
		<div className="relative w-full">
			<Input
				value={search}
				onClick={handleOnInputClick}
				onInput={handleOnInput}
				onClear={handleOnClear}
				{...props}
			/>

			{open && (
				<div
					ref={ref}
					className="absolute z-[100] w-full shadow-lg overflow-auto shadow-gray-300/60 top-14 h-[300px] flex flex-col bg-white rounded-lg border border-gray-300 min-w-fit"
				>
					{header ? header : null}
					{options &&
						options.map((o) => (
							<Option
								key={o.value}
								option={o}
								onClick={() => handleOnOptionClick(o)}
							/>
						))}
				</div>
			)}
		</div>
	);
};

export default Autocomplete;
