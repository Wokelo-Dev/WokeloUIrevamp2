import * as React from 'react';

function Building(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={15} height={15} fill="none" {...props}>
			<path
				d="M14.318 13.636h-.682V.682A.682.682 0 0012.955 0H2.044a.682.682 0 00-.681.682v12.954H.682a.682.682 0 100 1.364h13.636a.682.682 0 100-1.364zm-8.182 0v-1.363h2.728v1.363H6.136zm4.091 0v-2.045a.682.682 0 00-.682-.682h-4.09a.682.682 0 00-.682.682v2.045H2.727V1.364h9.546v12.272h-2.046z"
				fill="#5C5F62"
			/>
		</svg>
	);
}

const BuildingIcon = React.memo(Building);
export default BuildingIcon;
