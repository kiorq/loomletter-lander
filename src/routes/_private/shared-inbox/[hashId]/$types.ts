import type { Sender, Subscriber } from '../../../share/fetch';

export interface PageData {
	sender: Sender;
	subscribers: Subscriber[];
}
