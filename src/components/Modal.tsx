import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import CloseIcon from './icons/Close';

export type ModalProps = {
	children: React.ReactNode;
	open: boolean;
	onClose?: () => void;
	className?: string;
};

const Modal = ({ children, open, onClose, className }: ModalProps) => {
	return (
		<AnimatePresence>
			{open ? (
				<motion.div className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-gray-500/60 flex items-center justify-center">
					<div
						className={`rounded-lg bg-white p-10 shadow-md shadow-gray-500/30 min-w-[300px] relative ${className}`}
					>
						{children}

						<button
							type="button"
							className="absolute top-4 right-4"
							onClick={() => onClose && onClose()}
						>
							<CloseIcon />
						</button>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default Modal;
