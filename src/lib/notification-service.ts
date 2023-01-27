import PubSub from 'pubsub-js';

export interface NotificationModel {
	type: 'error' | 'success';
	message: string;
}

export const NOTIFICATION_SERVICE = 'NotificationService';

export const NotificationService = {
	subscribe(
		handler: (topic: string, notification: NotificationModel) => void
	) {
		return PubSub.subscribe(NOTIFICATION_SERVICE, handler);
	},

	unsubscribe(token: any) {
		PubSub.unsubscribe(token);
	},

	error(message: string) {
		PubSub.publish(NOTIFICATION_SERVICE, { type: 'error', message });
	},

	success(message: string) {
		PubSub.publish(NOTIFICATION_SERVICE, { type: 'success', message });
	},
};
