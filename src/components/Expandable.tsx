import React, { useEffect, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

export type ExpandableProps = {
	children: React.ReactNode;
	header?: React.ReactNode;
	onOpenChange?: (open: boolean) => void;
	className?: string;
};

const Expandable = ({
	header,
	children,
	onOpenChange,
	className,
}: ExpandableProps) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		onOpenChange && onOpenChange(open);
	}, [open]);

	return (
		<Collapsible.Root
			className={`w-full transition-all bg-white border border-gray-300 rounded-lg shadow-sm shadow-gray-300/30 hover:shadow-md ${className}`}
			open={open}
			onOpenChange={setOpen}
		>
			<Collapsible.Trigger asChild>{header && header}</Collapsible.Trigger>

			<Collapsible.Content>{children}</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default Expandable;
