import * as React from 'react';

function DownloadFile(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={15} height={17} fill="none" {...props}>
			<path
				d="M7.25 6.833v5m0 0l-2.679-2.5m2.679 2.5l2.679-2.5M11.714 16H2.786C1.799 16 1 15.254 1 14.333V2.667C1 1.747 1.8 1 2.786 1h4.987c.237 0 .464.088.631.244l4.835 4.512a.806.806 0 01.261.59v7.987c0 .92-.8 1.667-1.786 1.667z"
				stroke="currentColor"
				strokeWidth={1.4}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const DownloadFileIcon = React.memo(DownloadFile);
export default DownloadFileIcon;
