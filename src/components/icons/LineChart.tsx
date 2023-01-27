import * as React from 'react';

function LineChart(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={18} height={10} fill="none" {...props}>
			<path
				d="M2.248 8.91h0l4.753-4.757 3.419 3.424s0 0 0 0a.817.817 0 001.159 0s0 0 0 0l5.331-5.329a.819.819 0 10-1.158-1.158l.106.106-.107-.106L11 5.847 7.58 2.423s0 0 0 0a.817.817 0 00-1.159 0s0 0 0 0L1.09 7.752A.819.819 0 102.248 8.91z"
				fill="#684EEA"
				stroke="#684EEA"
				strokeWidth={0.3}
			/>
		</svg>
	);
}

const LineChartIcon = React.memo(LineChart);
export default LineChartIcon;
