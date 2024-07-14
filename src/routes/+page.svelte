<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	import { fade } from 'svelte/transition';

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

<!-- header -->
<div class="flex flex-row justify-end gap-4">
	<a href="/press" class="py-5 md:py-7 px-4 hover:underline text-[#066252]"> Press </a>
	<a href="/privacy-policy" class="py-5 md:py-7 px-4 hover:underline text-[#066252]">
		Privacy Policy
	</a>
</div>

<!-- Hero -->
<section class="flex flex-col md:flex-row gap-4 pt-5 md:pt-24 pb-32">
	<div class="md:hidden flex items-center justify-center">
		<img src="/logo.svg" alt="LoomLetter Icon" width="60" height="60" />
	</div>
	<div class="w-full md:w-[360px] flex-shrink-0">
		<img src="/iphones.png" class="w-full h-auto" />
	</div>
	<div class="w-full flex flex-col gap-3 items-start justify-center">
		<img src="/logo.svg" alt="LoomLetter Icon" width="60" height="60" class="hidden md:block" />
		<h1
			class="w-full font-bold text-4xl md:text-5xl text-[#066252] leading-[1.2] text-center md:text-left"
		>
			Effortlessly catch up on your favorite newsletters
		</h1>

		<p class="w-full font-normal text-lg md:text-2xl text-[#555555] text-center md:text-left">
			A Newsletter Reader for your inbox
		</p>

		<div class="w-full mt-5">
			<a
				href="#waitlist"
				class="block text-center w-full md:w-fit bg-[#32F3AE] text-[#066252] py-4 px-10 rounded-2xl text-lg font-medium transition-all hover:bg-[#066252] hover:text-white"
			>
				Join Waitlist
			</a>
		</div>
	</div>
</section>

<!-- Features -->
<section class="flex flex-col gap-4 pb-32">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
		<div class="bg-[#32F3AE] rounded-3xl px-5 py-5 flex flex-col gap-2">
			<h2 class="text-[#066252] font-bold text-3xl">Sync with your inbox</h2>
			<p class="text-[#066252]">
				Stay up-to-date with all your newsletters as they arrive. LoomLetter securely syncs with
				your inbox, ensuring your private information stays private.*
			</p>
		</div>

		<div class="bg-[#32F3AE] rounded-3xl px-5 py-5 flex flex-col gap-2">
			<h2 class="text-[#066252] font-bold text-3xl">AI Voice Reading</h2>
			<p class="text-[#066252]">
				Transform your reading experience with our AI-powered voice technology. Listen to
				newsletters in realistic, human-like audio, perfect for staying informed while on the go.
			</p>
		</div>

		<div class="bg-[#32F3AE] row-span-2 rounded-3xl px-5 py-5 flex flex-col gap-2">
			<h2 class="text-[#066252] font-bold text-3xl">Dynamic Widgets</h2>
			<p class="text-[#066252]">
				Keep your favorite newsletters at your fingertips. Add widgets to your home screen for quick
				and easy access at a glance.
			</p>

			<div class="mt-4 aspect-[53/29] relative">
				<img
					src="/widget-preview-1.png"
					alt="LoomLetter Widget Preview 1"
					class="w-full h-auto rounded-3xl absolute inset-0 z-10"
				/>
				<img
					src="/widget-preview-2.png"
					alt="LoomLetter Widget Preview 2"
					class="w-full h-auto rounded-3xl absolute inset-0 z-20 widget-fade"
				/>
			</div>
		</div>

		<div class="bg-[#32F3AE] rounded-3xl px-5 py-5 flex flex-col gap-2">
			<h2 class="text-[#066252] font-bold text-3xl">No Sign Up Required</h2>
			<p class="text-[#066252]">
				Dive into your newsletters instantly. LoomLetter requires no account creation, making it
				hassle-free and convenient to use.
			</p>
		</div>

		<div class="bg-[#32F3AE] rounded-3xl px-5 py-5 flex flex-col gap-2">
			<h2 class="text-[#066252] font-bold text-3xl">Offline Support</h2>
			<p class="text-[#066252]">
				Read anytime, anywhere. LoomLetter syncs your newsletters early in the morning, so they’re
				ready whenever you are, even offline.
			</p>
		</div>
	</div>
	<div class="pt-12">
		<p class="text-[#696969] text-sm text-center">
			*We securely store a refresh token to maintain your account connection and ensure seamless
			access to your newsletters. Your data is still only processed on the device; our servers only
			handle the token management for the device.
		</p>
	</div>
</section>

<!-- email clients -->
<section class="flex flex-col gap-4 pb-32">
	<div class="p-10 rounded-3xl bg-[#F8F8F8]">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 w-full">
			<div class="flex flex-col items-center justify-center">
				<img src="/gmail.png" class="w-[120px] h-[120px] mb-3" />
				<p class="text-[#066252] font-bold text-lg">Gmail</p>
				<p class="text-[#2D2D2D]">Supported</p>
			</div>
			<div class="flex flex-col items-center justify-center">
				<img src="/outlook.png" class="w-[120px] h-[120px] mb-3" />
				<p class="text-[#066252] font-bold text-lg">Microsoft Outlook</p>
				<p class="text-[#2D2D2D]">Coming Soon</p>
			</div>
			<div class="flex flex-col items-center justify-center">
				<img src="/applemail.png" class="w-[120px] h-[120px] mb-3" />
				<p class="text-[#066252] font-bold text-lg">Apple Mail</p>
				<p class="text-[#2D2D2D]">Supported</p>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="flex flex-col gap-0 pb-32">
	<div class="flex flex-col">
		<h2 class="mb-5 text-4xl font-semibold">Frequently Asked Questions</h2>
	</div>

	{#each faq as qa}
		<div class="border-b border-[#E6E6E6] last:border-0 py-5">
			<p class="font-medium text-2xl mb-3">{qa.question}</p>
			<p class="text-sm">
				{qa.answer}
			</p>
		</div>
	{/each}
</section>

<!-- Waitlist -->
<section class="flex flex-col gap-0 pb-32" id="waitlist">
	<div
		class="gradient-bg rounded-3xl p-12 text-center flex flex-col items-center justify-center relative overflow-clip"
	>
		{#if joining}
			<div
				transition:fade
				class="gradient-bg absolute inset-0 w-full h-full z-10 flex items-center justify-center"
			>
				<Spinner width="60" height="60" color="#066252" />
			</div>
		{:else if joined}
			<div
				transition:fade
				class="gradient-bg absolute inset-0 w-full h-full z-10 flex flex-col items-center justify-center"
			>
				<p class="font-bold text-3xl text-[#066252] mb-5">Thank you for joining the waitlist</p>
				<p class="font-medium text-lg text-[#066252]">
					You'll be among the first to know when we launch
				</p>
			</div>
		{/if}

		<p class="font-bold text-3xl text-[#066252] mb-5">Join the Waitlist</p>

		<form class="flex flex-row gap-3" on:submit={onJoinWaitList}>
			<input
				type="text"
				class="p-2 bg-white rounded-lg border border-[#066252] outline-[#066252] text-[#066252] md:w-[250px]"
				placeholder="Enter email address"
				bind:value={emailAddress}
			/>

			<button
				type="submit"
				class="bg-[#066252] border border-[#066252] px-5 text-white rounded-lg hover:bg-[#02332b]"
			>
				Join
			</button>
		</form>
	</div>
</section>
