import React from 'react';

export type AttributeCardProps = {
	title: string;
	description?: string | React.ReactNode;
	icon: React.ReactNode;
	selected?: boolean;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
};

const AttributeCard = ({
	title,
	description,
	icon,
	selected,
	className,
	disabled,
	onClick,
}: AttributeCardProps) => {
	return (
		<div
			className={`gap-4 rounded-lg cursor-pointer flex flex-row items-center p-5 border shadow-sm shadow-gray-500/30 hover:shadow-md bg-white ${
				selected
					? 'bg-purpl-light border-purpl'
					: disabled
					? 'bg-gray-100 cursor-not-allowed'
					: 'bg-white'
			} ${className}`}
			onClick={() => !disabled && onClick && onClick()}
		>
			{icon ? (
				<span
					className={`h-[40px] w-[40px] min-w-[40px] flex items-center justify-center rounded-full ${
						disabled
							? 'bg-gray-400/30 text-gray-400'
							: 'bg-purpl-light text-purpl'
					}`}
				>
					{icon && icon}
				</span>
			) : null}

			<div className="flex flex-col gap-2 items-start w-full">
				<h4 className="font-semibold">{title}</h4>

				{description ? (
					React.isValidElement(description) ? (
						description
					) : (
						<p className="text-sm">{description}</p>
					)
				) : null}
			</div>
		</div>
	);
};

export default AttributeCard;
