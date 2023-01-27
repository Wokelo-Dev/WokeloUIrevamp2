import * as React from 'react';

function Cross(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={8} height={8} fill="none" {...props}>
			<path
				d="M5.036 4L7.26 1.776a.731.731 0 000-1.036.731.731 0 00-1.036 0L4 2.964 1.776.74A.731.731 0 00.74.74a.731.731 0 000 1.036L2.964 4 .74 6.224a.731.731 0 000 1.036.731.731 0 001.036 0L4 5.036 6.224 7.26a.731.731 0 001.036 0h0a.734.734 0 000-1.036L5.036 4z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.2}
			/>
		</svg>
	);
}

const CrossIcon = React.memo(Cross);
export default CrossIcon;
