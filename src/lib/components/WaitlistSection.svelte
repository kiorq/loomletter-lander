<script lang="ts">
	import { slide } from 'svelte/transition';
	import Spinner from './Spinner.svelte';
	import mixpanel from 'mixpanel-browser';
	import { whenInView } from '$lib/lib';

	let emailAddress = '';
	let joining = false;
	let joined = false;

	const onChangeEmailAddress = () => {
		mixpanel.track('SetEmailAddress');
	};

	const onJoinWaitList = async (event: SubmitEvent) => {
		event.preventDefault();
		event.stopPropagation();
		joining = true;

		mixpanel.track('WaitListSubmit');

		try {
			const response = await fetch('/join-waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email_address: emailAddress })
			});

			if (!response.ok) {
				mixpanel.track('WaitListFail');
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if (data.ok) {
				joined = true;

				mixpanel.track('WaitListSuccess');
			}
		} finally {
			joining = false;
		}
	};

	const onTrackViewSection = (sectionName: string) => () => {
		mixpanel.track('ViewSection_' + sectionName);
	};
</script>

<section
	class="w-full pb-20 md:pb-[200px] pt-8"
	id="waitlist"
	use:whenInView={onTrackViewSection('WaitList')}
>
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
				Unlock Exclusive Early Access
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Relieve your time-strapped schedule with AI-powered convenience. Be among the first to
				experience LoomLetter and transform the way you manage your newsletters.
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
			{:else if joined}
				{#key 'joined-state'}
					<div
						transition:slide
						class="w-full max-w-[500px] justify-center items-center flex-col flex gap-5 bg-white/10 py-10 rounded-3xl"
					>
						<p class="text-6xl text-center">🥳</p>
						<p class="text-3xl md:text-2xl -text-gradient font-bold text-center">
							You'll be one of the first to know!
						</p>

						<p class="text-white/80 mt-5">Any questions?</p>
						<a
							class="-bg-simple-to-gradient bg-white/50 cursor-pointer w-fit py-3 px-6 rounded-2xl flex flex-row gap-3 items-center font-light"
							href="mailto:loomletter@digidouglas.com"
						>
							<p class="text-lg text-black font-medium text-center">Let's get in touch</p>
						</a>
					</div>
				{/key}
			{:else}
				{#key 'join-form'}
					<form
						class="flex flex-col md:flex-row justify-center items-center gap-6"
						transition:slide
						on:submit={onJoinWaitList}
					>
						<input
							type="#"
							class="w-[300px] border-[3px] border-[#00E0FF] outline-[#00E0FF] bg-white p-3 rounded-xl text-center text-black"
							placeholder="Enter your Email Address"
							bind:value={emailAddress}
							on:change={onChangeEmailAddress}
						/>

						<button
							class="w-fit bg-white/10 hover:bg-white/30 px-7 py-3 rounded-3xl font-bold transition-all text-lg"
							><p class="-text-gradient">Join Waitlist</p></button
						>
					</form>
				{/key}
			{/if}
		</div>
	</div>
</section>
