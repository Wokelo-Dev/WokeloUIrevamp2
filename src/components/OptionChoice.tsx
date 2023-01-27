import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCheckbox from './CustomCheckbox';
import CheckIcon from './icons/Check';

export type OptionChoiceProps = {
	className?: string;
	children: React.ReactNode;
	selected?: boolean;
	onChange?: (selected: boolean) => void;
};

const OptionChoice = ({
	className,
	children,
	selected,
	onChange,
}: OptionChoiceProps) => {
	return (
		<CustomCheckbox
			className={`flex flex-row cursor-pointer items-center rounded-lg px-4 py-3 gap-3 shadow-sm hover:shadow-md shadow-gray-500/30 border border-gray-300 ${className} ${
				selected ? 'bg-purpl-light border-purpl' : 'bg-white'
			}`}
			onClick={() => onChange && onChange(!selected)}
		>
			{/* Outline */}
			<span
				className={`flex flex-col flex-shrink-0 items-center justify-center p-1 rounded-md border w-5 h-5 transition-all ${
					selected ? 'bg-purpl border-purpl' : 'bg-white border-gray-400'
				}`}
				aria-hidden="true"
			>
				{/* Inner checkmark */}
				<AnimatePresence>
					{selected && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<CheckIcon className="text-white" />
						</motion.div>
					)}
				</AnimatePresence>
			</span>

			{children}
		</CustomCheckbox>
	);
};

export default OptionChoice;
