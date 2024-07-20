<script lang="ts">
	import { track, trackLead } from '$lib/track';
	import { onMount } from 'svelte';

	onMount(() => {
		trackLead();
		track('WaitListSuccess');
	});
</script>

<svelte:head>
	<title>Waitlist (Newsletter Reader - LoomLetter)</title>
</svelte:head>

<main class="flex flex-col gap-0">
	<section class="w-full pb-20 md:pb-[200px] pt-8" id="waitlist">
		<div class="flex flex-col gap-10 md:gap-20 items-center">
			<div class="flex-grow flex flex-col gap-8 justify-start">
				<p class="text-6xl md:text-[6rem] text-center">🥳</p>
				<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
					You'll be one of the first to know!
				</p>

				<p class="text-lg text-white text-center w-full md:max-w-[700px] mx-auto">
					Thank you for joining the waitlist for LoomLetter! We’re excited to have you on board.
				</p>
			</div>
			<div class="w-full flex flex-col gap-3 max-w-[500px]">
				<p class="text-xl font-semibold text-center">Here's what's next</p>

				<div class="bg-white/5 py-2.5 px-5 rounded-xl">
					<p class="font-medium text-lg -text-gradient">🧘 Stay Tuned</p>
					<p>Keep an eye on your inbox for updates and early access invitations.</p>
				</div>

				<div class="bg-white/5 py-2.5 px-5 rounded-xl">
					<p class="font-medium text-lg -text-gradient">📣 Spread the Word</p>
					<p>Share LoomLetter with your friends and colleagues so they can benefit too.</p>
				</div>

				<div class="bg-white/5 py-2.5 px-5 rounded-xl">
					<p class="font-medium text-lg -text-gradient">🍾 Get Ready</p>
					<p>
						Prepare to revolutionize the way you manage your newsletters with AI-powered narration,
						real-time push notifications, and more.
					</p>
				</div>
			</div>
			<div class="w-full md:w-[1000px] shrink-0 flex flex-col items-center justify-center gap-5">
				<p class="text-white/80 mt-5">Any questions?</p>
				<a
					class="-bg-simple-to-gradient bg-white/50 cursor-pointer w-fit py-3 px-6 rounded-2xl flex flex-row gap-3 items-center font-light"
					href="mailto:loomletter@digidouglas.com"
				>
					<p class="text-lg text-black font-medium text-center">Let's get in touch</p>
				</a>
			</div>
		</div>
	</section>
</main>
