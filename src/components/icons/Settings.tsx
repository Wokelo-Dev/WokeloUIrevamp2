import * as React from 'react';

function Settings(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={20} height={20} fill="none" {...props}>
			<path
				d="M19.454 8.69l-1.867-1.868v-2.65a1.821 1.821 0 00-1.822-1.821h-2.64L11.257.53a1.821 1.821 0 00-2.569 0L6.822 2.36h-2.65a1.821 1.821 0 00-1.821 1.821v2.641L.53 8.69a1.821 1.821 0 000 2.569l1.876 1.82v2.65a1.821 1.821 0 001.821 1.822h2.595l1.867 1.822A1.82 1.82 0 009.973 20c.481 0 .943-.19 1.284-.528l1.867-1.876h2.65a1.821 1.821 0 001.822-1.822v-2.65l1.867-1.821a1.822 1.822 0 000-2.568l-.01-.046zm-3.689 3.688v3.387h-3.387L9.973 18.18 7.57 15.765H4.181v-3.387L1.777 9.983l2.404-2.414V4.181H7.57l2.404-2.395 2.405 2.405h3.387v3.378l2.404 2.414-2.404 2.395z"
				fill="currentColor"
			/>
			<path
				d="M9.973 5.43a4.553 4.553 0 100 9.106 4.553 4.553 0 000-9.107zm0 7.285a2.732 2.732 0 110-5.465 2.732 2.732 0 010 5.465z"
				fill="currentColor"
			/>
		</svg>
	);
}

const SettingsIcon = React.memo(Settings);
export default SettingsIcon;
