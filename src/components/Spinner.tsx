export type SpinnerProps = {
	className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
	return (
		<span
			className={className}
			style={{
				width: 48,
				height: 48,
				border: '5px solid #6C48FF',
				borderBottomColor: 'transparent',
				borderRadius: '50%',
				display: 'inline-block',
				boxSizing: 'border-box',
				animation: 'rotation 1s linear infinite',
			}}
		></span>
	);
};

export default Spinner;
