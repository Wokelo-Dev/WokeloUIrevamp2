import * as React from 'react';

function Bulb(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={14} height={18} fill="none" {...props}>
			<path
				d="M5.12 13.714H6V9.428h1.715v4.286h.88c.113-1.03.639-1.88 1.492-2.809.097-.104.713-.743.786-.834a5.143 5.143 0 10-8.032-.002c.074.092.692.731.787.835.854.93 1.379 1.78 1.492 2.81zm.023 1.714v.858h3.429v-.858H5.143zm-3.64-4.286a6.857 6.857 0 1110.707.002c-.532.662-1.924 1.713-1.924 2.999v2.143A1.714 1.714 0 018.572 18H5.143a1.714 1.714 0 01-1.714-1.714v-2.143c0-1.286-1.393-2.337-1.925-3z"
				fill="#684EEA"
			/>
		</svg>
	);
}

const BulbIcon = React.memo(Bulb);
export default BulbIcon;
