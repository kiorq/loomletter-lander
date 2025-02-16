export interface Sender {
	name: string;
	domain: string;
	coverImageUrl: string;
	createdAt: string;
	emailAddress: string;
}

export interface Subscriber {
	subscribedAt: string;
	unsubscribedAt: string;
	emailAddress: string;
}

interface SubscriberResp {
	sender: Sender;
	subscribers: Subscriber[];
}

export const fetchSenders = async (): Promise<Sender[]> => {
	const res = await fetch('/api/shared-inbox-senders');
	const data = await res.json();

	return data;
};
