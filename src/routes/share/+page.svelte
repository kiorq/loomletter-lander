<script lang="ts">
	import { onMount } from 'svelte';

	let userEmail = '';
	let suggestedNewsletters: { name: string; domain: string; coverImageUrl: string }[] = [];

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		userEmail = params.get('a') || '-';
	});

	const copyEmail = () => {
		navigator.clipboard.writeText(userEmail);
		alert('Copied to clipboard!'); // Replace with toast/notification for better UX
	};
</script>

<svelte:head>
	<title>Share Your LoomLetter Address</title>
	<meta
		name="description"
		content="Easily subscribe to newsletters using your LoomLetter address. Copy and share your unique email address to start receiving curated newsletters directly in LoomLetter."
	/>
</svelte:head>

<main class="flex flex-col gap-10 pb-32">
	<!-- 📌 Header Section -->
	<section class="text-center">
		<h1 class="text-3xl md:text-5xl font-bold -text-gradient">Subscribe with LoomLetter</h1>
		<p class="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto">
			Use your LoomLetter address to sign up for newsletters and have them delivered directly to
			your inbox.
		</p>
	</section>

	<!-- 📌 Email Display & Copy Button -->
	<section
		class="flex flex-col md:flex-row items-center justify-between bg-white/10 p-6 rounded-2xl backdrop-blur-lg gap-4 w-fit mx-auto"
	>
		<p class="text-4xl font-medium text-white/90 rounded-lg flex-1 text-center">
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
		<ul class="mt-4 space-y-4 text-white/80 max-w-[600px] mx-auto">
			<li class="flex items-center gap-3">
				<span class="w-3 h-3 bg-[#32F3AE] rounded-full"></span>
				Copy your LoomLetter email address above.
			</li>
			<li class="flex items-center gap-3">
				<span class="w-3 h-3 bg-[#32F3AE] rounded-full"></span>
				Use it to sign up for newsletters like any other email.
			</li>
			<li class="flex items-center gap-3">
				<span class="w-3 h-3 bg-[#32F3AE] rounded-full"></span>
				Newsletters will appear in your LoomLetter inbox automatically.
			</li>
		</ul>
	</section>

	<!-- 📌 Suggested Newsletters -->
	<section class="w-full max-w-[800px] mx-auto">
		<h2 class="text-2xl font-semibold text-center mb-6">Suggested Newsletters</h2>
		<ul class="space-y-4">
			{#each suggestedNewsletters as newsletter}
				<li class="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-lg">
					<img
						src={newsletter.coverImageUrl}
						alt={newsletter.name}
						class="w-16 h-16 rounded-md mr-4"
					/>
					<div class="flex-grow">
						<p class="text-lg font-medium text-white">{newsletter.name}</p>
						<p class="text-white/70 text-sm">{newsletter.domain}</p>
					</div>
					<a
						href={newsletter.subscribeUrl}
						class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
					>
						Subscribe
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
