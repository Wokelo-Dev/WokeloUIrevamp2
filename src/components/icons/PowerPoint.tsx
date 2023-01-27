import * as React from 'react';

function PowerPoint(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={22} height={22} fill="none" {...props}>
			<g clipPath="url(#prefix__clip0_299_9713)">
				<path
					d="M12.083 21.02c5.5 0 9.969-4.468 9.969-9.968H2.114c0 5.517 4.469 9.968 9.969 9.968z"
					fill="#C8421D"
				/>
				<path
					d="M12.083 1.083v9.969h9.969c0-5.5-4.452-9.969-9.969-9.969z"
					fill="#FF8F6A"
				/>
				<path
					d="M2.131 11.052h9.97V1.083c-5.5 0-9.97 4.469-9.97 9.969z"
					fill="#ED6B47"
				/>
				<path
					d="M10.192 16.586h-9.11c-.6 0-1.1-.498-1.1-1.1V6.514c0-.602.5-1.1 1.1-1.1h9.11c.602 0 1.1.498 1.1 1.1v8.972c0 .601-.498 1.1-1.1 1.1z"
					fill="#C8421D"
				/>
				<path
					d="M4.864 11.79v2.355H3.541V7.648h2.63c.755 0 1.357.19 1.787.568.43.378.653.876.653 1.512 0 .619-.224 1.117-.653 1.495-.43.379-1.032.568-1.788.568H4.864zm0-.996H6.17c.361 0 .653-.103.842-.292.19-.207.293-.447.293-.757s-.086-.567-.275-.773c-.19-.206-.464-.31-.843-.31H4.881v2.132h-.017z"
					fill="#fff"
				/>
				<path
					opacity={0.2}
					d="M11.258 6.411v9.075c0 .602-.498 1.1-1.1 1.1H3.833l.653.98h6.583c.601 0 1.1-.499 1.1-1.1V7.494a1.05 1.05 0 00-.911-1.083z"
					fill="#000"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0_299_9713">
					<path fill="#fff" d="M0 0h22v22H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

const PowerPointIcon = React.memo(PowerPoint);
export default PowerPointIcon;
