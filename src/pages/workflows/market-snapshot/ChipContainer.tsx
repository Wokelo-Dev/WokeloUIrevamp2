import { useState } from 'react';
import Chip from './Chip';

export type ChipContainerProps = {
	chips: { value: string }[];
	selected: string[];
	onChipSelect?: (value: string, selected: boolean) => void;
	className?: string;
};

const ChipContainer = ({
	chips,
	selected,
	onChipSelect,
	className,
}: ChipContainerProps) => {
	const [expanded, setExpanded] = useState(false);

	const shouldOverflow = chips?.length > 10;

	const handleOnChipClick = (value: string) => {
		if (selected.some((c) => c === value)) {
			onChipSelect && onChipSelect(value, false);
		} else {
			onChipSelect && onChipSelect(value, true);
		}
	};

	return (
		<div className={`w-full flex flex-row flex-wrap gap-3 ${className}`}>
			{chips && shouldOverflow && expanded
				? chips.map((c) => (
						<Chip
							key={c.value}
							value={c.value}
							selected={selected.includes(c.value)}
							onClick={handleOnChipClick}
						/>
				  ))
				: chips
						.slice(0, 10)
						.map((c) => (
							<Chip
								key={c.value}
								value={c.value}
								selected={selected.includes(c.value)}
								onClick={handleOnChipClick}
							/>
						))}
			{shouldOverflow ? (
				<span
					className="text-purpl underline font-regular text-base py-2 cursor-pointer"
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? 'Less' : `${chips?.length - 10} more`}
				</span>
			) : null}
		</div>
	);
};

export default ChipContainer;
