import * as React from 'react';

function PieChart(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={17} height={17} fill="none" {...props}>
			<path
				d="M8.602 9.134l6.23-1.052c.002.05.006.1.01.148v.006c.007.088.013.175.013.264a6.328 6.328 0 01-6.354 6.329 6.329 6.329 0 01-.637-12.62V8.5a.636.636 0 00.636.636h.094l.008-.002zM8.5.9a7.6 7.6 0 100 15.2A7.6 7.6 0 008.5.9zm4.086 2.776A6.33 6.33 0 0114.6 6.839l-5.464.91V2.209c1.27.13 2.474.64 3.45 1.468z"
				fill="#4D4D4D"
				stroke="#4D4D4D"
				strokeWidth={0.2}
			/>
		</svg>
	);
}

const PieChartIcon = React.memo(PieChart);
export default PieChartIcon;
