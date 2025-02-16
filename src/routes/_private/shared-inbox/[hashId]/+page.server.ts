import type { PageData } from './$types';

const API_URL = 'https://loomletter-api.digidouglas.com/api/api/shared_inbox/senders/subscribers';

export const load = async ({ params }: { params: { hashId: string } }): Promise<PageData> => {
	const i = params.hashId;
	try {
		// Forward the `i` parameter in the API request
		const response = await fetch(`${API_URL}?i=${encodeURIComponent(i)}`);

		if (!response.ok) {
			throw new Error('Could not fetch data');
		}

		const data = await response.json();

		// Handle if API response contains success: false
		if (!data.success) {
			throw new Error('Could not fetch data');
		}

		return data;
	} catch (error) {
		throw new Error('Could not fetch data');
	}
};
