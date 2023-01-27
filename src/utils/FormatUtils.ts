export const FormatUtils = {
	number(num: number) {
		return num.toLocaleString('en-US');
	},
	getFilenameFromHeader(content: string) {
		let filename = '';
		if (content && content.indexOf('attachment') !== -1) {
			var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
			var matches = filenameRegex.exec(content);
			if (matches != null && matches[1]) {
				filename = matches[1].replace(/['"]/g, '');
			}
		}
		return filename;
	},
};
