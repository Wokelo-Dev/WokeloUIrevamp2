import * as React from 'react';

function Check(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={9} height={9} fill="none" {...props}>
			<path
				d="M1.1 4.5l2.267 2.55L7.9 1.95"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const CheckIcon = React.memo(Check);
export default CheckIcon;
