import * as React from 'react';

function Info(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={17} height={17} fill="none" {...props}>
			<path
				d="M8.5 17a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-1.7a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6zm0-7.65a.85.85 0 01.85.85v3.4a.85.85 0 01-1.7 0V8.5a.85.85 0 01.85-.85zm0-3.4a.85.85 0 110 1.7.85.85 0 010-1.7z"
				fill="currentColor"
				stroke="none"
			/>
		</svg>
	);
}

const InfoIcon = React.memo(Info);
export default InfoIcon;
