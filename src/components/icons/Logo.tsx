import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={51} height={34} fill="none" {...props}>
			<path
				d="M18.716 9.437l7.364.436-7.112 18.66c-.748 1.552-1.372 2.122-2.837 2.625l-7.337-.9 6.724-17.752c.971-2.145 1.661-2.792 3.198-3.069z"
				fill="#fff"
				stroke="#2A2A2A"
				strokeWidth={3}
			/>
			<path
				d="M40.636 1.705L48 2.141l-9.936 27.027c-.747 1.552-.882 1.544-2.347 2.047H27L37.438 4.774c.971-2.146 1.662-2.793 3.198-3.069z"
				fill="#583BE8"
				stroke="#2A2A2A"
				strokeWidth={3}
			/>
			<path
				d="M9.376 15.861H2l6.035 13.99c.658 1.17 1.25 1.614 2.682 2.047l7.377-.342-5.7-13.306c-.848-1.615-1.5-2.12-3.018-2.389zM25.305 8.644l-7.358.533 7.474 20.346c.777 1.69 1.413 2.309 2.888 2.848l7.322-1.04-7.068-19.357c-1.013-2.338-1.716-3.04-3.258-3.33z"
				fill="#fff"
				stroke="#2A2A2A"
				strokeWidth={2}
			/>
		</svg>
	);
}

const LogoIcon = React.memo(Logo);
export default LogoIcon;
