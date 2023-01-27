import * as React from 'react';

function EyeDisabled(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={20} height={20} fill="none" {...props}>
			<path
				d="M8.282 3.656A7.512 7.512 0 0110 3.461c5.727 0 9 6.5 9 6.5a15.03 15.03 0 01-1.767 2.592m-5.498-.87a2.454 2.454 0 01-1.753.776 2.471 2.471 0 01-1.779-.714 2.436 2.436 0 01-.718-1.766 2.423 2.423 0 01.78-1.74m6.595 6.548A8.275 8.275 0 0110 16.461c-5.727 0-9-6.5-9-6.5a15.019 15.019 0 014.14-4.826l9.72 9.652zM1 1l18 18"
				stroke="#5C5F62"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const EyeDisabledIcon = React.memo(EyeDisabled);
export default EyeDisabledIcon;
