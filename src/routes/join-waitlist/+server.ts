import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database';
import isEmail from 'is-email';

export async function POST({ request }) {
	const { email_address } = await request.json();

	if (!isEmail(email_address)) {
		return json({ error: 'Invalid email address' }, { status: 400 });
	}

	const { error } = await database.createJoinListRecord({ email_address });

	if (error) {
		console.error(error);
		return json({ error: 'Could not add address to waitlist' }, { status: 400 });
	}

	return json({ ok: true }, { status: 201 });
}
