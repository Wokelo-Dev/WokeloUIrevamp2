import * as React from 'react';

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={15} height={9} fill="none" {...props}>
			<path
				d="M14 1L7.5 7.5 1 1"
				stroke="#5C5F62"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const ChevronDownIcon = React.memo(ChevronDown);
export default ChevronDownIcon;
