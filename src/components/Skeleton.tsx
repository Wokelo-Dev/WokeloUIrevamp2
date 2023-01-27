import React, { AllHTMLAttributes } from 'react';

export type SkeletonProps = AllHTMLAttributes<HTMLDivElement>;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
	return (
		<div
			className={`h-3 rounded-sm bg-gray-400 animate-pulse ${className}`}
			{...props}
		></div>
	);
};

export default Skeleton;
