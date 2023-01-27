import * as React from 'react';

function File(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={17} height={20} fill="none" {...props}>
			<path
				d="M10.375 1h-7.5c-.497 0-.974.19-1.326.527C1.198 1.865 1 2.323 1 2.8v14.4c0 .477.198.935.55 1.273.35.337.828.527 1.325.527h11.25c.497 0 .974-.19 1.326-.527.351-.338.549-.796.549-1.273V6.4L10.375 1z"
				stroke="currentColor"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.375 1v5.4H16"
				stroke="currentColor"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const FileIcon = React.memo(File);
export default FileIcon;
