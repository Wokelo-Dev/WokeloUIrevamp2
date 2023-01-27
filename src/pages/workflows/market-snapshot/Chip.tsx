import { AnimatePresence, motion } from 'framer-motion';
import CrossIcon from '../../../components/icons/Cross';

export type ChipProps = {
	className?: string;
	selected: boolean;
	value: string;
	onClick?: (value: string) => void;
};

const Chip = ({ className, selected, value, onClick }: ChipProps) => {
	return (
		<div
			className={`transition-all rounded-lg border px-3 py-2 cursor-pointer flex flex-row items-center gap-3 ${
				selected
					? 'bg-purpl-light border-purpl-light'
					: 'bg-white border-gray-300'
			} ${className}`}
			onClick={() => onClick && onClick(value)}
		>
			<span
				className={`text-base ${
					selected ? 'text-purpl font-semibold' : 'text-gray-700 font-regular'
				}`}
			>
				{value}
			</span>

			<AnimatePresence presenceAffectsLayout>
				{selected ? (
					<motion.span
						className="rounded-full bg-black h-5 w-5 flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<CrossIcon className="text-white" />
					</motion.span>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default Chip;
