import * as React from 'react';

function InfoSm(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={15} height={15} fill="none" {...props}>
			<path
				d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2.3a1.107 1.107 0 110 2.216 1.107 1.107 0 010-2.215zm1.112 9.287a1.112 1.112 0 11-2.224 0v-4.03a1.112 1.112 0 112.224 0v4.03z"
				fill="#5C5F62"
			/>
		</svg>
	);
}

const InfoSmIcon = React.memo(InfoSm);
export default InfoSmIcon;
