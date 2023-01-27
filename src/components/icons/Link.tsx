import * as React from 'react';

function Link(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={16} height={16} fill="none" {...props}>
			<path
				d="M11.818 8.81h0a.517.517 0 000 .73l.28.28a.517.517 0 00.73 0l-.035-.036.036.036.844-.845a4.701 4.701 0 00-6.648-6.648l-.845.845a.517.517 0 000 .73h0l.28.28s0 0 0 0a.517.517 0 00.73 0l.845-.845a3.272 3.272 0 114.628 4.628l-.845.844zM9.82 12.098h0a.517.517 0 010 .73l-.845.845a4.7 4.7 0 11-6.648-6.648l.844-.845h0a.517.517 0 01.731 0h0l.28.28h0l5.637 5.638zm0 0l-.28-.28s0 0 0 0a.517.517 0 00-.73 0s0 0 0 0l-.845.845a3.272 3.272 0 11-4.628-4.628l.845-.845 5.637 4.908z"
				fill="#5C5F62"
				stroke="#5230DD"
				strokeWidth={0.1}
			/>
			<path
				d="M5.518 9.473l.035.035-.035-.035a.575.575 0 000 .813h0l.197.197a.575.575 0 00.813 0l3.956-3.956h0a.575.575 0 000-.813h0l-.198-.197a.575.575 0 00-.813 0l.036.035-.036-.035-3.955 3.956z"
				fill="#5C5F62"
				stroke="#5230DD"
				strokeWidth={0.1}
			/>
		</svg>
	);
}

const LinkIcon = React.memo(Link);
export default LinkIcon;
