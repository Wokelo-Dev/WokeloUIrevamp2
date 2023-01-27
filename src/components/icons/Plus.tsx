import * as React from 'react';

function Plus(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={13} height={13} fill="none" {...props}>
			<path
				d="M11.771 5.921H7.68V1.83a.879.879 0 00-1.758 0V5.92H1.83a.879.879 0 000 1.758H5.92v4.092a.879.879 0 001.758 0V7.68h4.092a.879.879 0 000-1.758z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.1}
			/>
		</svg>
	);
}

const PlusIcon = React.memo(Plus);
export default PlusIcon;
