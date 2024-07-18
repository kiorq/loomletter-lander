<script lang="ts">
	import mixpanel from 'mixpanel-browser';
	import { whenInView } from '$lib/lib';
	import WaitlistSection from '$lib/components/WaitlistSection.svelte';

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

	const onHeroCtaClick = () => {
		mixpanel.track('HeroCtaClick');
	};

	const onTrackViewSection = (sectionName: string) => () => {
		mixpanel.track('ViewSection_' + sectionName);
	};
</script>

<section class="w-full pb-20 md:py-[120px]" use:whenInView={onTrackViewSection('Hero')}>
	<div class="flex flex-col-reverse md:flex-row gap-8 items-center">
		<div class="w-full md:w-[502px] shrink-0">
			<img src="/iphones.png" class="w-full h-auto" />
		</div>
		<div class="flex-grow flex flex-col gap-5 justify-start">
			<h1 class="text-4xl text-center md:text-left md:text-6xl -text-gradient font-bold">
				<!-- TODO: i like this one alot "What If You Never Missed a Newsletter Again?"" -->
				Read Newsletters in Half the Time
			</h1>

			<p class="text-lg md:text-2xl text-white text-center md:text-left">
				Tailored for Time-Strapped Professionals
			</p>

			<div
				class="w-full flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-5"
			>
				<a
					on:click={onHeroCtaClick}
					class="w-fit bg-white/10 hover:bg-white/30 px-9 py-4 rounded-full font-bold transition-all"
					href="#waitlist"><p class="-text-gradient text-xl">Unlock Exclusive Early Access</p></a
				>

				<p class="text-white/70">Launching on August 15, 2024</p>
			</div>
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('AIRead')}>
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

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('PushN')}>
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

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('Widgets')}>
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

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('NoSignUp')}>
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

<WaitlistSection />

<section class="w-full pb-[200px]" use:whenInView={onTrackViewSection('Faq')}>
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl -text-gradient font-bold text-center">Frequently Asked Questions</p>
		</div>
		<div class="w-full md:w-[1000px] shrink-0">
			{#each faq as qa}
				<div class="py-7 border-b last:border-0 border-white/10">
					<p class="text-2xl text-white font-medium mb-3">{qa.question}</p>
					<p class="text-white/90 font-light">{qa.answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<WaitlistSection />
