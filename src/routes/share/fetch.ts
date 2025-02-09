export interface Sender {
	name: string;
	domain: string;
	coverImageUrl: string;
}

export const fetchSenders = async (): Promise<Sender[]> => {
	const res = await fetch('/api/shared-inbox-senders');
	const data = await res.json();

	return data;
};
