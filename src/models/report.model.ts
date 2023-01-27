export interface ReportModel {
	id: number;
	title: string;
	type: string;
	metrics: {
		words_processed: number;
		words_generated: number;
		time_saved: number;
	};
	// attributes: {
	// 	partnership: number;
	// 	acquisition: number;
	// 	investment: number;
	// };
	date: string;
	status: string;
}
