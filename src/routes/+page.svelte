<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Spinner from '../lib/components/Spinner.svelte';

	const faq = [
		{
			question: 'How does LoomLetter protect my privacy?',
			answer:
				'All your data is processed securely on your device, ensuring that your personal information remains private and protected. We do not store your email contents on our servers. Only a secure, encrypted refresh token is stored to maintain your account connection.'
		},
		{
			question: 'Why does LoomLetter need access to my email?',
			answer:
				'LoomLetter needs access to your email to fetch your newsletters and keep them organized in one place. This access is handled securely, and your email content is processed only on your device.'
		},
		{
			question: 'Is my email data stored on LoomLetter’s servers?',
			answer:
				'No, your email data is not stored on our servers. All email content is processed on your device. Our servers only handle the secure, encrypted refresh token needed to maintain your account connection with your device.'
		},
		{
			question: 'How can I disconnect my email account from LoomLetter?',
			answer:
				'You can disconnect your email account from LoomLetter in the app settings and tapping the Log Out button. This will stop all data synchronization and remove any saved data from the app and your token from our servers.'
		}
	];

	const emailClients = [
		{
			img: '/gmail.png',
			title: 'Gmail',
			descr: 'Supported'
		},
		{
			img: '/outlook.png',
			title: 'Microsoft Outlook',
			descr: 'Coming Soon'
		},
		{
			img: '/applemail.png',
			title: 'Apple Mail',
			descr: 'Coming Soon'
		}
	];

	let emailAddress = '';
	let joining = false;
	let joined = false;

	const onJoinWaitList = async (event: SubmitEvent) => {
		event.preventDefault();
		event.stopPropagation();
		joining = true;

		try {
			const response = await fetch('/join-waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email_address: emailAddress })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if (data.ok) {
				joined = true;
			}
		} finally {
			joining = false;
		}
	};
</script>

<section class="w-full pb-20 md:py-[120px]">
	<div class="flex flex-col-reverse md:flex-row gap-8 items-center">
		<div class="w-full md:w-[502px] shrink-0">
			<img src="/iphones.png" class="w-full h-auto" />
		</div>
		<div class="flex-grow flex flex-col gap-5 justify-start">
			<h1 class="text-4xl text-center md:text-left md:text-6xl -text-gradient font-bold">
				Stop Letting Your Favorite Newsletters Pile Up
			</h1>

			<p class="text-lg md:text-2xl text-white text-center">
				A Newsletter Reader for Busy Professionals
			</p>

			<div class="w-full flex lg:justify-start justify-center">
				<a
					class="w-fit bg-white/10 hover:bg-white/30 px-9 py-4 rounded-full font-bold transition-all"
					href="#waitlist"><p class="-text-gradient text-xl">Exclusive Early Access</p></a
				>
			</div>
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]">
	<div class="flex flex-col-reverse md:flex-row gap-0 items-center">
		<div class="flex-grow flex flex-col justify-start mt-[-100px] md:mt-0">
			<div
				class="flex flex-col gap-8 bg-white/10 backdrop-blur-lg py-10 px-4 md:p-20 rounded-3xl md:rounded-[100px] justify-center items-center"
			>
				<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
					AI-Powered Newsletter Narration
				</p>

				<p class="text-lg text-white text-center">
					Effortlessly catch up on newsletters while commuting, exercising, or multitasking with
					LoomLetter’s AI-powered narration. Enjoy hands-free, engaging listening that fits
					perfectly into your busy lifestyle.
				</p>

				<!-- <button
					class="w-fit bg-white/10 hover:bg-white/30 px-6 py-3 rounded-3xl font-bold transition-all"
					><p class="-text-gradient">Listen to a Newsletter</p></button
				> -->
			</div>
		</div>
		<div class="w-3/5 md:w-[390px] shrink-0">
			<img src="/ai-reading-screenshot.png" class="w-full h-auto" />
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]">
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
				Never Miss a Newsletter
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Stay on top of your newsletters with real-time push notifications. Get instant alerts the
				moment new content arrives, ensuring you never miss an update. Stay informed and connected,
				effortlessly.
			</p>
		</div>
		<div class="w-full md:w-[700px] shrink-0">
			<img src="notifications.png" class="w-full h-auto" />
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]">
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">Quick Access Widgets</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Instantly access your favorite newsletters right from your home screen. LoomLetter’s widgets
				make it easy to stay updated with the latest content at a glance. Customize your widgets to
				display the newsletters that matter most to you, providing a seamless and convenient reading
				experience.
			</p>
		</div>
		<div class="w-full md:w-[1000px] shrink-0">
			<img src="widgets.png" class="w-full h-auto md:block hidden" />
			<img src="widgets-sm.png" class="w-full h-auto md:hidden block" />
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]">
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">No Sign-Up Needed</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Start using LoomLetter instantly with no sign-up required. Simply connect your inbox and
				dive into a seamless newsletter experience. Quick, easy, and hassle-free!
			</p>
		</div>
		<div class="w-full md:w-[1000px] shrink-0">
			<div
				class="bg-gradient-to-b from-[#F8F8F8]/10 to-[#929292]/10 p-10 gap-12 md:gap-0 md:p-20 rounded-[60px] grid grid-cols-1 md:grid-cols-3"
			>
				{#each emailClients as client}
					<div class="flex flex-col justify-center items-center">
						<img src={client.img} class="w-[120px] mb-4" />

						<p class="text-xl font-bold text-[#32F3AE] mb-2">{client.title}</p>
						<p class="text-white">{client.descr}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]" id="waitlist">
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
				Exclusive Early Access
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				LoomLetter is launching soon! Join our waitlist to get early access and stay updated on the
				latest features and news. Don’t miss out on transforming your newsletter experience.
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
						class="-bg-gradient w-fit py-3 px-6 rounded-2xl flex flex-row gap-3 items-center"
						transition:slide
					>
						<p class="text-lg text-black font-medium text-center">
							Thank you for joining!<br />You'll be one of the first to know!
						</p>
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

<section class="w-full pb-[200px]">
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<h1 class="text-4xl -text-gradient font-bold text-center">Frequently Asked Questions</h1>
		</div>
		<div class="w-full md:w-[1000px] shrink-0">
			{#each faq as qa}
				<div class="py-7 border-b last:border-0 border-white/10">
					<p class="text-2xl text-white font-medium mb-3">{qa.question}</p>
					<p class="text-white/80">{qa.answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
