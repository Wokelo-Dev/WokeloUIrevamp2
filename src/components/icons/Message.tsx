import * as React from 'react';

function Message(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={20} height={18} fill="none" {...props}>
			<path
				d="M16.2 1H3.4A2.4 2.4 0 001 3.4v8a2.4 2.4 0 002.4 2.4h4V17l3.2-3.2h5.6a2.4 2.4 0 002.4-2.4v-8A2.4 2.4 0 0016.2 1zM5 5.8h5.6M5 9h9.6"
				stroke="#684EEA"
				strokeWidth={1.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const MessageIcon = React.memo(Message);
export default MessageIcon;
