import * as React from 'react';

function Close(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={14} height={14} fill="none" {...props}>
			<path
				d="M8.784 6.93l-.07.07.07.07 4.76 4.76c.47.471.471 1.239 0 1.714a1.209 1.209 0 01-1.714 0l-4.76-4.76-.07-.07-.07.07-4.76 4.76a1.209 1.209 0 01-1.714 0 1.209 1.209 0 010-1.714l4.76-4.76.07-.07-.07-.07-4.76-4.76a1.209 1.209 0 010-1.714 1.209 1.209 0 011.714 0l4.76 4.76.07.07.07-.07 4.76-4.76a1.209 1.209 0 011.714 0 1.209 1.209 0 010 1.714l-4.76 4.76z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.2}
			/>
		</svg>
	);
}

const CloseIcon = React.memo(Close);
export default CloseIcon;
