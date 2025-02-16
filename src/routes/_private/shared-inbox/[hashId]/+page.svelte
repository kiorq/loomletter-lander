<script lang="ts">
	import { type Sender, type Subscriber } from '../../../share/fetch';

	import moment from 'moment';

	export let data: { sender: Sender; subscribers: Subscriber[] };
	$: sender = data.sender;
	$: subscribers = data.subscribers;

	// Export subscribers
	function exportSubscribers() {
		const subs = subscribers.filter((sub) => !sub.unsubscribedAt); // Exclude unsubscribed users
		if (!subs.length) {
			alert('No active subscribers to export.');
			return;
		}

		const csvContent = [
			'Email Address,Subscribed At',
			...subs.map((sub) => [sub.emailAddress, sub.subscribedAt || ''].join(','))
		].join('\n');

		const blob = new Blob([csvContent], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'active_subscribers.csv';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}

	export function formatDate(dateString: string | null, format: string = 'YYYY-MM-DD') {
		if (!dateString) return '-'; // Handle null or empty dates
		return moment(dateString).format(format);
	}
</script>

<svelte:head>
	<title>LoomLetter - Internal Newsletter Subscribers</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Centered Layout -->
<main class="flex flex-col items-center justify-start min-h-screen px-4 py-12 text-white">
	<!-- Sender Banner -->
	{#if sender}
		<div class="w-full max-w-2xl mb-10 flex flex-row gap-3">
			<img
				src={sender.coverImageUrl}
				alt="Sender Cover"
				class="h-16 w-16 rounded-md border border-white/60 object-cover bg-white/70"
			/>
			<div class="flex-1 flex flex-col">
				<h1 class="text-3xl font-semibold">{sender.name}</h1>
				<p class="text-gray-400 text-sm">{sender.emailAddress}</p>
			</div>
		</div>
	{/if}

	<!-- Subscribers Table -->
	<div class="w-full max-w-2xl">
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-xl font-medium text-gray-200">Subscribers</h2>
			<button
				on:click={exportSubscribers}
				class="px-4 py-2 rounded-lg text-white/60 bg-white/5 hover:bg-white/20 hover:text-white transition border border-white/10"
			>
				Export CSV
			</button>
		</div>

		{#if subscribers.length}
			<div class="overflow-hidden border border-white/15 rounded-lg">
				<table class="w-full border-collapse">
					<thead>
						<tr class="bg-white/5 text-white/80 text-left border-b border-white/15">
							<th class="py-3 px-4">Email Address</th>
							<th class="py-3 px-4">Subscribed At</th>
							<th class="py-3 px-4">Unsubscribed At</th>
						</tr>
					</thead>
					<tbody>
						{#each subscribers as sub}
							<tr class="border-b border-white/15 hover:bg-white/5 transition text-white/70">
								<td class="py-3 px-4">{sub.emailAddress}</td>
								<td class="py-3 px-4">{sub.subscribedAt ? formatDate(sub.subscribedAt) : '-'}</td>
								<td class="py-3 px-4"
									>{sub.unsubscribedAt ? formatDate(sub.unsubscribedAt) : '-'}</td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="text-gray-500 text-center mt-6">No subscribers found.</p>
		{/if}
	</div>
</main>
