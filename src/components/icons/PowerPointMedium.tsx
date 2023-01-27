import * as React from 'react';

function PowerPointMedium(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={64} height={64} fill="none" {...props}>
			<g clipPath="url(#prefix__clip0_299_9840)">
				<path
					d="M35.15 61.15c16 0 29-13 29-29h-58c0 16.05 13 29 29 29z"
					fill="#C8421D"
				/>
				<path d="M35.15 3.15v29h29c0-16-12.95-29-29-29z" fill="#FF8F6A" />
				<path d="M6.2 32.15h29v-29c-16 0-29 13-29 29z" fill="#ED6B47" />
				<path
					d="M29.65 48.25H3.15c-1.75 0-3.2-1.45-3.2-3.2v-26.1c0-1.75 1.45-3.2 3.2-3.2h26.5c1.75 0 3.2 1.45 3.2 3.2v26.1c0 1.75-1.45 3.2-3.2 3.2z"
					fill="#C8421D"
				/>
				<path
					d="M14.15 34.3v6.85H10.3v-18.9h7.65c2.2 0 3.95.55 5.2 1.65 1.25 1.1 1.9 2.55 1.9 4.4 0 1.8-.65 3.25-1.9 4.35-1.25 1.1-3 1.65-5.2 1.65h-3.8zm0-2.9h3.8c1.05 0 1.9-.3 2.45-.85.55-.6.85-1.3.85-2.2 0-.9-.25-1.65-.8-2.25-.55-.6-1.35-.9-2.45-.9h-3.8v6.2h-.05z"
					fill="#fff"
				/>
				<path
					opacity={0.2}
					d="M32.75 18.65V45.05c0 1.75-1.45 3.2-3.2 3.2h-18.4l1.9 2.85H32.2c1.75 0 3.2-1.45 3.2-3.2V21.8c.05-1.6-1.1-2.95-2.65-3.15z"
					fill="#000"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0_299_9840">
					<path fill="#fff" d="M0 0h64v64H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

const PowerPointMediumIcon = React.memo(PowerPointMedium);
export default PowerPointMediumIcon;
