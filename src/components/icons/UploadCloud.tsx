import * as React from 'react';

function UploadCloud(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={21} height={18} fill="none" {...props}>
			<path
				d="M13.678 12.597l-3.38-3.569-3.38 3.57M10.299 9.028v8.03"
				stroke="#583BE8"
				strokeWidth={1.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.388 14.73a4.38 4.38 0 001.85-2.134 4.694 4.694 0 00.222-2.884 4.488 4.488 0 00-1.5-2.42 4.083 4.083 0 00-2.592-.94h-1.064a7.286 7.286 0 00-1.395-2.837 6.802 6.802 0 00-2.426-1.91 6.448 6.448 0 00-2.972-.6 6.483 6.483 0 00-2.923.83 6.882 6.882 0 00-2.287 2.093 7.35 7.35 0 00-1.193 2.937 7.526 7.526 0 00.14 3.192c.276 1.04.77 2 1.446 2.808"
				stroke="#583BE8"
				strokeWidth={1.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.678 12.597l-3.38-3.569-3.38 3.57"
				stroke="#583BE8"
				strokeWidth={1.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const UploadCloudIcon = React.memo(UploadCloud);
export default UploadCloudIcon;
