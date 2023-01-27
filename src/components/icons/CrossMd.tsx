import * as React from 'react';

function CrossMd(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={11} height={11} fill="none" {...props}>
			<path
				d="M9.784 8.5l-3-3 3-3A.909.909 0 008.5 1.217l-2.999 3-3-3A.909.909 0 001.217 2.5l3 2.999-3 3A.909.909 0 002.5 9.783l2.999-3 3 3A.909.909 0 009.783 8.5z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.1}
			/>
		</svg>
	);
}

const CrossMdIcon = React.memo(CrossMd);
export default CrossMdIcon;
