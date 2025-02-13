<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchSenders, type Sender } from './fetch';

	let userEmail = '';
	let suggestedNewsletters: Sender[] = [];

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		userEmail = params.get('a') || '-';

		suggestedNewsletters = await fetchSenders();
	});

	const copyEmail = () => {
		navigator.clipboard.writeText(userEmail);
		alert('Copied to clipboard!');
	};
</script>

<svelte:head>
	<title>Share Your LoomLetter Address</title>
	<meta
		name="description"
		content="Easily subscribe to newsletters using your LoomLetter address. Copy and share your unique email address to start receiving curated newsletters directly in LoomLetter."
	/>
</svelte:head>

<main class="flex flex-col gap-16 pb-32 md:mt-10">
	<!-- 📌 Header Section -->
	<section class="text-center">
		<h1 class="text-3xl md:text-5xl font-bold -text-gradient">Subscribe with LoomLetter</h1>
		<p class="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto mt-4">
			Use your LoomLetter address to sign up for newsletters and have them delivered directly to
			your inbox.
		</p>
	</section>

	<!-- 📌 Email Display & Copy Button -->
	<section
		class="flex flex-col md:flex-row items-center justify-between bg-white/10 p-6 rounded-2xl backdrop-blur-lg gap-6 w-full max-w-[600px] mx-auto"
	>
		<p class="text-2xl md:text-3xl font-medium text-white/90 flex-1 text-center">
			{userEmail}
		</p>
		<button
			class="px-6 py-3 -cta-gradient text-black font-semibold rounded-full transition-all"
			on:click={copyEmail}
		>
			Copy Address
		</button>
	</section>

	<!-- 📌 How to Use Instructions -->
	<section class="text-center">
		<h2 class="text-2xl font-semibold">How to Use</h2>
		<ul class="mt-5 space-y-4 text-white/80 max-w-[600px] mx-auto">
			{#each ['Copy your LoomLetter email address above.', 'Use it to sign up for newsletters like any other email.', 'Newsletters will appear in your LoomLetter inbox automatically.'] as step, i}
				<li class="flex items-center gap-4">
					<span
						class="w-8 h-8 bg-[#32F3AE]/30 text-white font-bold text-lg flex items-center justify-center rounded-full"
					>
						{i + 1}
					</span>
					<span class="text-lg">{step}</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- 📌 Suggested Newsletters -->
	<section class="w-full max-w-[800px] mx-auto">
		<h2 class="text-2xl font-semibold text-center mb-6">Suggested Newsletters</h2>
		<ul class="space-y-5">
			{#each suggestedNewsletters as newsletter}
				<li class="flex items-center bg-white/10 p-5 rounded-xl backdrop-blur-lg gap-4">
					<img src={newsletter.coverImageUrl} alt={newsletter.name} class="w-16 h-16 rounded-md" />
					<div class="flex-grow">
						<p class="text-lg font-medium text-white">{newsletter.name}</p>
						<p class="text-white/70 text-sm">{newsletter.domain}</p>
					</div>
					<a
						href={`https://${newsletter.domain}`}
						target="_blank"
						class="px-5 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
					>
						Subscribe
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
