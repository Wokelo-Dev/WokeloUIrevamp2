import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={14} height={14} fill="none" {...props}>
			<path
				d="M6.333 11.667A5.333 5.333 0 106.333 1a5.333 5.333 0 000 10.667zM13 13l-2.9-2.9"
				stroke="#666"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const SearchIcon = React.memo(Search);
export default SearchIcon;
