import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	NotificationModel,
	NotificationService,
} from '../../lib/notification-service';
import { useAppSelector } from '../../store/store';
import BottomBar from '../BottomBar';
import CloseIcon from '../icons/Close';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export type AuthLayoutProps = {
	children: React.ReactNode;
};

// This component is protected
const AuthLayout = ({ children }: AuthLayoutProps) => {
	const navigate = useNavigate();
	const { access } = useAppSelector((s) => s.auth);
	const location = useLocation();

	useEffect(() => {
		if (!access) {
			navigate('/login', { replace: true });
		}
	}, [access, location]);

	return (
		<>
			<div className="flex flex-row w-full h-full">
				<Sidebar />

				<div className="flex flex-col w-full overflow-auto bg-white">
					<Navbar />

					<div className="pt-[65px] pb-[85px] px-5">{children}</div>

					<BottomBar />
				</div>
			</div>
		</>
	);
};

export default AuthLayout;
