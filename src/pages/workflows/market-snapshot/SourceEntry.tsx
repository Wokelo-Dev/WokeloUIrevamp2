import React from 'react';
import MemoDelete from '../../../components/icons/Delete';

export type SourceEntryProps = {
	icon: React.ReactNode;
	name: string;
	onDelete?: () => void;
	className?: string;
};

const SourceEntry = ({ icon, name, onDelete, className }: SourceEntryProps) => {
	return (
		<div
			className={`flex flex-row items-center py-3 justify-between ${className}`}
		>
			<div className="flex flex-row items-center gap-3">
				{icon}
				<p className="font-semibold">{name}</p>
			</div>

			<button type="button" className="text-gray-500" onClick={onDelete}>
				<MemoDelete />
			</button>
		</div>
	);
};

export default SourceEntry;
