import * as React from 'react';

function Tag(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={18} height={18} fill="none" {...props}>
			<path
				d="M8.89 0a.9.9 0 00-.64.264L.9 7.614a3.104 3.104 0 000 4.37L6.015 17.1c1.2 1.2 3.172 1.2 4.372 0l7.35-7.35a.899.899 0 00.26-.718L17.3 1.49a.9.9 0 00-.815-.814L8.965.004A.9.9 0 008.889 0zm.335 1.833l6.35.57.59 6.374-7.05 7.05a1.268 1.268 0 01-1.827 0l-5.115-5.115a1.268 1.268 0 010-1.826l7.052-7.053z"
				fill="#5C5F62"
			/>
		</svg>
	);
}

const TagIcon = React.memo(Tag);
export default TagIcon;
