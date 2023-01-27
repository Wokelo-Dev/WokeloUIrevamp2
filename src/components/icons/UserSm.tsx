import * as React from 'react';

function UserSm(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={11} height={15} fill="none" {...props}>
			<path
				d="M9.706 4.412a4.398 4.398 0 00-1.292-3.12A4.398 4.398 0 005.294 0a4.398 4.398 0 00-3.12 1.293A4.398 4.398 0 00.882 4.412c0 1.218.494 2.321 1.292 3.119a4.399 4.399 0 003.12 1.293 4.399 4.399 0 003.12-1.293 4.398 4.398 0 001.292-3.12zM0 13.235C0 14.118 1.985 15 5.294 15c3.104 0 5.294-.882 5.294-1.765 0-1.764-2.077-3.53-5.294-3.53C1.985 9.706 0 11.472 0 13.236z"
				fill="#5C5F62"
			/>
		</svg>
	);
}

const UserSmIcon = React.memo(UserSm);
export default UserSmIcon;
