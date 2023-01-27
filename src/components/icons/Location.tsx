import * as React from 'react';

function Location(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={15} height={18} fill="none" {...props}>
			<path
				d="M7.318 16.96h0a.717.717 0 00.697 0h0c.131-.073 1.722-.973 3.28-2.565 1.557-1.591 3.088-3.88 3.088-6.728a6.716 6.716 0 10-13.433 0c0 2.849 1.53 5.137 3.089 6.728 1.558 1.592 3.148 2.492 3.28 2.565zm.349-14.577a5.29 5.29 0 015.283 5.284c0 2.074-1.025 3.843-2.204 5.191-1.162 1.328-2.47 2.244-3.08 2.636-.61-.392-1.917-1.308-3.078-2.636-1.18-1.348-2.205-3.117-2.205-5.191a5.29 5.29 0 015.284-5.284z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.1}
			/>
			<path
				d="M7.667 11.05h0a3.384 3.384 0 10-3.383-3.383h0a3.387 3.387 0 003.383 3.383zm0-5.333a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.1}
			/>
		</svg>
	);
}

const LocationIcon = React.memo(Location);
export default LocationIcon;
