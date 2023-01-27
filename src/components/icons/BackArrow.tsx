import * as React from 'react';

function BackArrow(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={13} height={13} fill="none" {...props}>
			<path
				d="M12 6.5H1M6.5 1L1 6.5 6.5 12"
				stroke="currentColor"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const BackArrowIcon = React.memo(BackArrow);
export default BackArrowIcon;
