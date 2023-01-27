import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice from './slices/authSlice';
import companyDeepDiveSlice from './slices/companyDeepDiveSlice';
import companySlice from './slices/companySlice';
import marketSnapshotSlice from './slices/marketSnapshotSlice';
import peerAnalysisSlice from './slices/peerAnalysisSlice';
import reportsSlice from './slices/reportsSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		company: companySlice,
		companyDeepDive: companyDeepDiveSlice,
		marketSnapshot: marketSnapshotSlice,
		reports: reportsSlice,
		peerAnalysis: peerAnalysisSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
