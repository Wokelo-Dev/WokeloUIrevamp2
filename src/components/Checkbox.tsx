import { InputHTMLAttributes, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckIcon from './icons/Check';

export type CheckboxProps =
	| {
			className?: string;
			size?: number;
			children?: React.ReactNode;
			onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	  } & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
	className,
	size,
	children,
	onChange,
	...props
}: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState(
		props.checked || props.defaultChecked
	);

	useEffect(() => {
		setIsChecked(props.checked);
	}, [props.checked]);

	return (
		<label className={`cursor-pointer ${className}`}>
			<input
				type="checkbox"
				className="invisible"
				{...props}
				onChange={(e) => {
					setIsChecked(e.target.checked);
					onChange && onChange(e);
				}}
			/>

			{/* Label container */}
			<div className="flex flex-row items-center gap-2">
				{/* Outline */}
				<span
					className={`flex flex-col items-center justify-center p-1 border-2 rounded-md w-9 h-9 transition-all hover:shadow-lg hover:shadow-gray-500/30 ${
						isChecked ? 'border-orange' : 'border-gray-400'
					}`}
					aria-hidden="true"
					style={{ width: size ?? 24, height: size ?? 24 }}
				>
					{/* Inner checkmark */}
					<AnimatePresence>
						{isChecked && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="flex items-center justify-center"
							>
								<CheckIcon />
							</motion.div>
						)}
					</AnimatePresence>
				</span>

				{children}
			</div>
		</label>
	);
};

export default Checkbox;
