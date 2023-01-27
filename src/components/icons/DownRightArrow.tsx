import * as React from 'react';

function DownRightArrow(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={11} height={13} fill="none" {...props}>
			<path
				d="M7.67 12.788a.741.741 0 01-1.038 0 .715.715 0 010-1.02l1.681-1.657H3.3c-1.823 0-3.3-1.455-3.3-3.25V.722C0 .323.328 0 .733 0c.405 0 .734.323.734.722v6.14c0 .996.82 1.805 1.833 1.805h5.38L6.63 6.65a.714.714 0 010-1.022.741.741 0 011.037 0l3.117 3.069a.716.716 0 010 1.021L7.67 12.79z"
				fill="#605F63"
			/>
		</svg>
	);
}

const DownRightArrowIcon = React.memo(DownRightArrow);
export default DownRightArrowIcon;
