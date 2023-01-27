import React from 'react';

export interface StepModel {
	id: number;
	description: string | React.ReactNode;
	renderNextButton?: boolean;
	progress?: number;
	component?: React.ReactNode;
	path: string;
}
