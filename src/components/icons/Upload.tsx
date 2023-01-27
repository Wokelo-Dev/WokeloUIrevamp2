import * as React from 'react';

function Upload(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={16} height={16} fill="none" {...props}>
			<path
				d="M2.555 8.737l5.444-4.789 5.444 4.79M8 3.95V15M15 1H1"
				stroke="currentColor"
				strokeWidth={1.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const UploadIcon = React.memo(Upload);
export default UploadIcon;
