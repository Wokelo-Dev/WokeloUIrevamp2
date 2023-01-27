export const PROCESSING_STEP = 'processinStep';
export const PROCESSING_FAILED = 'processingFailed';
export const PROCESSING_COMPLETED = 'processingCompleted';
export const PROCESSING_COMPLETED_INT = 'processingCompletedInt';
export const PROCESSING_STARTED = 'processingStarted';
export const REQUEST_RECEIVED = 'requestReceived';
export const PROCESSING_COMPLETE_NO_DATA = "processingCompletedNodata";

export type ReportStatus =
	| 'processingStep'
	| 'processingFailed'
	| 'processingCompleted'
	| 'processingCompletedInt'
	| 'processingStarted'
	| 'requestReceived'
	| 'processingCompletedNodata';
