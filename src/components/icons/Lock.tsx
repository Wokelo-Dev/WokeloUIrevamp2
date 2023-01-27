import * as React from 'react';

function Lock(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={13} height={15} fill="none" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.375 5h-.813V3.571C10.563 1.571 8.776 0 6.5 0 4.225 0 2.437 1.571 2.437 3.571V5h-.812C.731 5 0 5.643 0 6.429v7.142C0 14.357.731 15 1.625 15h9.75c.894 0 1.625-.643 1.625-1.429V6.43C13 5.643 12.269 5 11.375 5zM6.5 11.429c-.894 0-1.625-.643-1.625-1.429S5.606 8.571 6.5 8.571 8.125 9.214 8.125 10s-.731 1.429-1.625 1.429zM9.019 5H3.98V3.571c0-1.214 1.138-2.214 2.519-2.214 1.381 0 2.519 1 2.519 2.214V5z"
				fill="#5C5F62"
			/>
		</svg>
	);
}

const LockIcon = React.memo(Lock);
export default LockIcon;
