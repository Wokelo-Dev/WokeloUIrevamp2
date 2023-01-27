import * as React from 'react';

function RightArrow(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={13} height={13} fill="none" {...props}>
			<path
				d="M1 6.5h11M6.5 1L12 6.5 6.5 12"
				stroke="currentColor"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const RightArrowIcon = React.memo(RightArrow);
export default RightArrowIcon;
