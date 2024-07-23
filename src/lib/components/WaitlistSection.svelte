<script lang="ts">
	import { slide } from 'svelte/transition';
	import Spinner from './Spinner.svelte';
	import { whenInView } from '$lib/lib';
	import { track } from '$lib/track';
	import { goto } from '$app/navigation';

	export let sectionName: string;

	let emailAddress = '';
	let joining = false;

	const onJoinWaitList = async (event: SubmitEvent) => {
		event.preventDefault();
		event.stopPropagation();
		joining = true;

		track('WaitListSubmit');

		try {
			const response = await fetch('/join-waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email_address: emailAddress })
			});

			if (!response.ok) {
				track('WaitListFail');
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if (data.ok) {
				goto('/thank-you');
			}
		} finally {
			joining = false;
		}
	};

	const onTrackViewSection = (sectionName: string) => () => {
		track('ViewSection_' + sectionName);
	};
</script>

<section
	class="w-full pb-20 md:pb-[200px] pt-8"
	id="waitlist"
	use:whenInView={onTrackViewSection(sectionName)}
>
	<div class="flex flex-col gap-10 md:gap-10 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-5xl md:text-7xl -text-gradient font-bold text-center">
				Join the Early Adopter Program
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px] mx-auto">
				Be among the first to experience LoomLetter! Join our Early Adopter Program to get exclusive
				early access, provide feedback, and help shape the future of our app. Sign up now to secure
				your spot and enjoy unique benefits designed just for our early users.
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px] mx-auto">
				After entering your email address, we'll send you details on how to get started.
			</p>
		</div>

		<div class="w-full md:w-[1000px] shrink-0 flex flex-col items-center justify-center">
			{#if joining}
				{#key 'joining-state'}
					<div
						class="bg-white/10 w-fit py-3 px-6 rounded-2xl flex flex-row gap-3 items-center"
						transition:slide
					>
						<Spinner width={30} height={30} />
						<p class="text-lg">Joining...</p>
					</div>
				{/key}
			{:else}
				{#key 'join-form'}
					<form
						class="flex flex-col md:flex-row justify-center items-center gap-6 bg-white/20 py-6 px-4 w-full md:w-fit md:py-12 md:px-20 rounded-3xl md:rounded-full"
						transition:slide
						on:submit={onJoinWaitList}
					>
						<input
							type="#"
							class="w-full md:w-[300px] border-[3px] border-[#00E0FF] outline-[#00E0FF] bg-white p-3 rounded-xl text-center text-black"
							placeholder="Enter your Email Address"
							bind:value={emailAddress}
						/>

						<button
							class="-bg-gradient text-black px-7 py-3 rounded-3xl font-bold transition-all text-lg w-full md:w-fit"
							><p class="">Join</p></button
						>
					</form>
				{/key}
			{/if}
		</div>

		<div>
			<p class="text-2xl font-medium text-center text-white/80 mb-3">Early Adopter Benefits</p>
			<div class="flex flex-row flex-wrap gap-4 justify-center items-center md:px-10">
				<div class="bg-white/10 rounded-full py-2 px-5">🚀 Exclusive Early Access</div>
				<div class="bg-white/10 rounded-full py-2 px-5">🛠️ Priority Feature Requests</div>
				<div class="bg-white/10 rounded-full py-2 px-5">💬 Direct Feedback Loop</div>
				<div class="bg-white/10 rounded-full py-2 px-5">🔒 Free Lifetime Subscription</div>
				<div class="bg-white/10 rounded-full py-2 px-5">👑 Special Recognition</div>
			</div>
		</div>
	</div>
</section>
