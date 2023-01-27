import * as React from 'react';

function Dollar(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={12} height={19} fill="none" {...props}>
			<path
				d="M5.636 1v17M9.5 4.091H3.705a2.705 2.705 0 100 5.41h3.863a2.705 2.705 0 010 5.409H1"
				stroke="#605F63"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const DollarIcon = React.memo(Dollar);
export default DollarIcon;
