import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import UploadIcon from './icons/Upload';

export type FileUploaderProps = {
	onSelect?: (file: File) => void;
	onDrop?: (file: File) => void;
};

export type FileDragAndDropProps = {
	onChange?: (file: File) => void;
	types?: string[];
	files?: File | File[];
	className?: string;
} & FileUploaderProps;

const FileDragAndDrop = ({
	onChange,
	types,
	onDrop,
	onSelect,
	className,
}: FileDragAndDropProps) => {
	const [key, setKey] = useState(1);

	const handleOnChange = (file: File) => {
		setKey(key + 1);
		onChange && onChange(file);
	};

	const handleOnSelect = (file: File) => {
		setKey(key + 1);
		onSelect && onSelect(file);
	};

	return (
		<FileUploader
			key={key}
			handleChange={handleOnChange}
			name="file"
			types={types}
			file={null}
			files={null}
			onDrop={onDrop}
			onSelect={handleOnSelect}
		>
			<div
				className={`flex flex-row items-center w-full py-3 text-purpl rounded-lg cursor-pointer bg-purpl-light border gap-2 border-purpl border-dashed justify-center ${className}`}
			>
				<UploadIcon />
				<h4 className="text-base font-semibold">Upload Document (pdf)</h4>
			</div>
		</FileUploader>
	);
};

export default FileDragAndDrop;
