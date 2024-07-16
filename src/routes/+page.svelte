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

<section class="w-full py-[120px]">
	<div class="flex flex-row gap-8 items-center">
		<div class="w-[502px] shrink-0">
			<img src="/iphones.png" class="w-full h-auto" />
		</div>
		<div class="flex-grow flex flex-col gap-5 justify-start">
			<h1 class="text-6xl -text-gradient font-bold">
				Stop Letting Your Favorite Newsletters Pile Up
			</h1>

			<p class="text-2xl text-white">A Newsletter Reader for Busy Professionals</p>

			<button
				class="w-fit bg-white/10 hover:bg-white/30 px-6 py-3 rounded-3xl font-bold transition-all"
				><p class="-text-gradient">Exclusive Early Access</p></button
			>
		</div>
	</div>
</section>

<section class="w-full pb-[200px]">
	<div class="flex flex-row gap-8 items-center">
		<div class="flex-grow flex flex-col justify-start">
			<div class="flex flex-col gap-8 bg-white/10 p-20 rounded-[100px] justify-center items-center">
				<h1 class="text-6xl -text-gradient font-bold text-center">
					AI-Powered Newsletter Narration
				</h1>

				<p class="text-lg text-white text-center">
					Effortlessly catch up on newsletters while commuting, exercising, or multitasking with
					LoomLetter’s AI-powered narration. Enjoy hands-free, engaging listening that fits
					perfectly into your busy lifestyle.
				</p>

				<button
					class="w-fit bg-white/10 hover:bg-white/30 px-6 py-3 rounded-3xl font-bold transition-all"
					><p class="-text-gradient">Listen to a Newsletter</p></button
				>
			</div>
		</div>
		<div class="w-[390px] shrink-0">
			<img src="/ai-reading-screenshot.png" class="w-full h-auto" />
		</div>
	</div>
</section>

<section class="w-full pb-[200px]">
	<div class="flex flex-col gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<h1 class="text-6xl -text-gradient font-bold text-center">Never Miss a Newsletter</h1>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Effortlessly catch up on newsletters while commuting, exercising, or multitasking with
				LoomLetter’s AI-powered narration. Enjoy hands-free, engaging listening that fits perfectly
				into your busy lifestyle.
			</p>
		</div>
		<div class="w-[700px] shrink-0">
			<img src="notifications.png" class="w-full h-auto" />
		</div>
	</div>
</section>
