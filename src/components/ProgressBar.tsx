import { motion } from 'framer-motion';

export type ProgressBarProps = {
	progress: number;
	className?: string;
};

const ProgressBar = ({ progress, className }: ProgressBarProps) => {
	return (
		<div className={`h-1 z-20 ${className}`}>
			<div className="w-full h-1 bg-gray-200 relative">
				<motion.span
					className="absolute h-full ease-in rounded-[20px] to-[#6C48FF] from-[#8BCEFF] bg-gradient-to-r"
					animate={{ width: `${progress}%` }}
				></motion.span>
			</div>
		</div>
	);
};

export default ProgressBar;
