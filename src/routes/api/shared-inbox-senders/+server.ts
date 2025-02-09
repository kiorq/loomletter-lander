import { json } from '@sveltejs/kit';

const API_URL = 'https://loomletter-api.digidouglas.com/api/api/shared_inbox/senders';

export async function GET() {
	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			return json(
				{ error: 'Failed to fetch data from LoomLetter API' },
				{ status: response.status }
			);
		}

		const data = await response.json();

		// handle if data.success if false
		if (!data.success) {
			return json(
				{ error: 'Failed to fetch data from LoomLetter API' },
				{ status: response.status }
			);
		}

		return json(data.newsletterSources);
	} catch (error) {
		return json({ error: 'Internal server error', details: error }, { status: 500 });
	}
}
