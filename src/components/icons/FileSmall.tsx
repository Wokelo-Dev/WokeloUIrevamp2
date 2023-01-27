import * as React from 'react';

function FileSmall(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 14 17" fill="none" {...props}>
			<path
				d="M8.22 1.038h0l4.794 4.82s0 0 0 0c.129.13.197.305.197.485v8.243A1.51 1.51 0 0111.7 16.1H2.09a1.519 1.519 0 01-1.523-1.514V2.364c0-.84.686-1.528 1.523-1.528h5.647c.182 0 .355.075.482.202zM1.928 2.364v12.222c0 .078.068.147.161.147h9.609a.145.145 0 00.15-.147V7.312H8.284c-.837 0-1.52-.676-1.52-1.517V2.203H2.09a.166.166 0 00-.161.16zm9.252 3.582L8.123 2.884v2.91c0 .083.07.152.159.152h2.898z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.2}
			/>
		</svg>
	);
}

const FileSmallIcon = React.memo(FileSmall);
export default FileSmallIcon;
