import * as React from 'react';

function Delete(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={18} height={18} fill="none" {...props}>
			<path
				d="M1.843 5.444l-.01-.09h-.708c-.273 0-.534-.105-.726-.29a.974.974 0 01-.299-.7c0-.262.107-.514.3-.7.191-.186.452-.291.725-.291h15.75c.273 0 .534.105.726.291.192.186.299.438.299.7a.974.974 0 01-.3.7 1.043 1.043 0 01-.725.29h-.709l-.01.09-1.012 9.599A3.27 3.27 0 0111.87 17.9H6.13h0a3.326 3.326 0 01-2.211-.813 3.13 3.13 0 01-1.064-2.043h0l-1.013-9.6zm11.25 9.405v-.002l1.013-9.382.012-.11H3.882l.012.11 1.013 9.382h0v.002c.037.292.181.562.406.758.225.196.515.307.817.311v0H11.87c.302-.004.592-.115.817-.31.225-.197.37-.467.406-.76zM10.406 2.082H7.312c-.272 0-.533-.105-.725-.291a.974.974 0 01-.3-.7c0-.262.108-.514.3-.7C6.779.205 7.04.1 7.313.1h3.093c.273 0 .534.105.726.291.192.186.3.438.3.7a.974.974 0 01-.3.7 1.043 1.043 0 01-.726.29z"
				fill="currentColor"
				stroke="none"
				strokeWidth={0.2}
			/>
		</svg>
	);
}

const MemoDelete = React.memo(Delete);
export default MemoDelete;
