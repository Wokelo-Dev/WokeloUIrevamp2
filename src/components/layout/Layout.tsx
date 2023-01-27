import React, { useEffect, useState } from 'react';
import {
	NotificationModel,
	NotificationService,
} from '../../lib/notification-service';
import CloseIcon from '../icons/Close';

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [notification, setNotification] = useState<NotificationModel | null>(
		null
	);

	const handleOnNotification = (topic: string, data: NotificationModel) => {
		setNotification(data);
	};

	useEffect(() => {
		const sub = NotificationService.subscribe((n, d) =>
			handleOnNotification(n, d)
		);
		return () => NotificationService.unsubscribe(sub);
	}, []);

	return (
		<>
			<div className="flex flex-row w-[100vw] h-[100vh]">{children}</div>
			{notification && (
				<div
					className={`fixed bottom-10 right-0 text-white rounded-xl p-4 min-w-[300px] justify-between max-w-full mx-10 flex flex-row items-center ${
						notification.type === 'error'
							? 'bg-red-500'
							: notification.type === 'success'
							? 'bg-green-500'
							: ''
					}`}
				>
					{notification.message}
					<button
						type="button"
						className="p-3"
						onClick={() => setNotification(null)}
					>
						<CloseIcon />
					</button>
				</div>
			)}
		</>
	);
};

export default Layout;
