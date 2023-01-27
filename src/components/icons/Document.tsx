import * as React from 'react';

function Document(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={18} height={18} fill="none" {...props}>
			<path
				d="M12.6 0H5.4A5.405 5.405 0 000 5.4v11.7a.9.9 0 00.9.9h11.7c2.978 0 5.4-2.422 5.4-5.4V5.4C18 2.422 15.578 0 12.6 0zm3.6 12.6c0 1.985-1.615 3.6-3.6 3.6H1.8V5.4c0-1.985 1.615-3.6 3.6-3.6h7.2c1.985 0 3.6 1.615 3.6 3.6v7.2z"
				fill="#684EEA"
			/>
			<path d="M4.5 6.3h9v1.8h-9V6.3zm0 3.6h6.3v1.8H4.5V9.9z" fill="#684EEA" />
		</svg>
	);
}

const DocumentIcon = React.memo(Document);
export default DocumentIcon;
