<script lang="ts">
	import { whenInView } from '$lib/lib';
	import WaitlistSection from '$lib/components/WaitlistSection.svelte';
	import { track } from '$lib/track';
	import Apple from '$lib/components/icons/Apple.svelte';
	import ArticleItem from '$lib/components/ArticleItem.svelte';

	const faq = [
		{
			question: 'How does this work?',
			answer:
				'We provide you with your own personal LoomLetter email address, which you can use to sign up for your favorite newsletters. All your newsletters will be delivered to LoomLetter, where they’ll be organized and made easily accessible with features like AI-powered narration and smart filters.'
		},
		{
			question: 'What is the Early Adopter Program?',
			answer:
				'The Early Adopter Program allows you to be among the first to experience LoomLetter. By joining, you get exclusive early access to new features and updates, and your feedback will help shape the future of the app.'
		},
		{
			question: 'What makes LoomLetter different from other newsletter readers?',
			answer:
				'LoomLetter focuses on convenience for busy professionals with features like AI narration and easy access widgets, providing a seamless and efficient way to stay updated.'
		},
		{
			question: 'What are the key features of LoomLetter?',
			answer:
				'LoomLetter offers AI-powered newsletter narration, readability formats and home screen widgets for easy access to readings newsletter. It’s designed to make staying informed convenient and efficient.'
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
		track('HeroCtaClick', { referrer: document?.referrer || 'N/A' });
	};

	const onTrackViewSection = (sectionName: string) => () => {
		track('ViewSection_' + sectionName);
	};
</script>

<svelte:head>
	<title>Newsletter Reader - LoomLetter</title>
	<meta
		name="description"
		content="The newsletter reader tailored for time-strapped professionals. With LoomLetter's AI-powered newsletter narrator, effortlessly manage and listen to your favorite newsletters on the go. Stay on top of subscriptions with push notifications, quick access widgets, and more. Perfect for staying informed and productive."
	/>
</svelte:head>

<section class="w-full pb-20 md:py-[120px]" use:whenInView={onTrackViewSection('Hero')}>
	<div class="flex flex-col-reverse md:flex-row gap-8 items-center">
		<div class="w-full md:w-[502px] shrink-0">
			<img alt="3 iPhones of LoomLetter screenshots" src="/iphones.webp" class="w-full h-auto" />
		</div>
		<div class="flex-grow flex flex-col gap-4 justify-start">
			<h1 class="text-4xl text-center md:text-left md:text-6xl -text-gradient font-bold">
				<!-- TODO: i like this one alot "What If You Never Missed a Newsletter Again?"" -->
				Never Miss a Newsletter Again
			</h1>

			<p class="text-lg md:text-2xl text-white text-center md:text-left">
				Join 100+ Early Adopters
			</p>

			<div
				class="w-full flex flex-col md:justify-start md:items-start justify-center items-center gap-5 mt-3"
			>
				<a
					on:click={onHeroCtaClick}
					class="-cta-gradient w-fit bg-white/10 hover:bg-white/30 px-5 md:px-9 py-4 rounded-full font-bold transition-all"
					href="https://testflight.apple.com/join/Jynt22qF"
					target="_blank"
					><p class="text-black text-xl lg:text-2xl text-center flex flex-row items-center gap-2">
						<Apple /> <span>Try Now</span>
					</p></a
				>
			</div>

			<p class="md:text-lg text-white/70 text-center md:text-left">
				Early Adopter Program Available for iOS only
			</p>
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('PushN')}>
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
				Never Miss a Newsletter Again
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px]">
				Stay on top of your newsletters with real-time push notifications. Get instant alerts the
				moment new content arrives, ensuring you never miss an update. Stay informed and connected,
				effortlessly.
			</p>
		</div>
		<div class="w-full md:w-[700px] shrink-0">
			<img alt="LoomLetter notifications" src="notifications.png" class="w-full h-auto" />
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
			<img
				alt="Screenshot of AI narration in LoomLetter"
				src="/ai-reading-screenshot.png"
				class="w-full h-auto"
			/>
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
			<img
				alt="Preview of small and medium widgets"
				src="widgets.png"
				class="w-full h-auto md:block hidden"
			/>
			<img
				alt="Preview of small widget"
				src="widgets-sm.png"
				class="w-full h-auto md:hidden block"
			/>
		</div>
	</div>
</section>

<section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('Transform')}>
	<div class="flex flex-col-reverse md:flex-row gap-0 items-center">
		<div class="w-3/5 md:w-[390px] shrink-0">
			<img alt="Video of using readability features" src="/readability.gif" class="w-full h-auto" />
		</div>

		<div class="flex-grow flex flex-col justify-start md:mt-0">
			<div
				class="flex flex-col gap-8 bg-white/10 backdrop-blur-lg py-10 px-4 md:p-20 rounded-3xl md:rounded-[100px] justify-center items-center"
			>
				<p class="text-3xl md:text-6xl -text-gradient font-bold text-center">
					Transform How You Read Newsletters
				</p>

				<p class="text-lg text-white text-center">
					Customize how you read newsletters with LoomLetter. Adjust formats and settings for a
					reading experience tailored to your preferences—all for personal use and ease.
				</p>

				<!-- <button
					class="w-fit bg-white/10 hover:bg-white/30 px-6 py-3 rounded-3xl font-bold transition-all"
					><p class="-text-gradient">Listen to a Newsletter</p></button
				> -->
			</div>
		</div>
	</div>
</section>

<!-- <section class="w-full pb-20 md:pb-[200px]" use:whenInView={onTrackViewSection('NoSignUp')}>
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
						<img alt={`Email client ${client.title}`} src={client.img} class="w-[120px] mb-4" />

						<p class="text-xl font-bold text-[#32F3AE] mb-2">{client.title}</p>
						<p class="text-white">{client.descr}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section> -->

<WaitlistSection sectionName="WaitList1" />

<section class="w-full pb-20" use:whenInView={onTrackViewSection('Faq')}>
	<div class="flex flex-col gap-10 md:gap-20 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl text-white font-bold text-center">Frequently Asked Questions</p>
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

<section class="w-full pb-20" use:whenInView={onTrackViewSection('Articles')}>
	<div class="flex flex-col gap-20">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl text-white font-bold text-center">Articles</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
			<ArticleItem
				href="/article/how-modern-professionals-stay-ahead-of-the-competition"
				title="How Modern Professionals Stay Ahead of the Competition: The Power of Newsletters"
				descr="Professionals rely on newsletters to stay competitive across various industries."
			/>
			<ArticleItem
				href="/article/best-newsletters-2024"
				title="Best Newsletter 2024"
				descr="These newsletters will make sure you don't fall behind in your industry"
			/>
		</div>
	</div>
</section>

<WaitlistSection sectionName="WaitList2" />

<section class="w-full pb-20" use:whenInView={onTrackViewSection('Faq')}>
	<div class="flex flex-col gap-12">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-3xl text-white font-bold text-center">See What We’re Building</p>

			<p class="text-lg text-white text-center">
				We’re listening to our users to build something you’ll love.
			</p>
		</div>
		<div class="flex flex-col md:flex-row gap-5 items-center justify-center">
			<a
				href="https://loomletter.canny.io/changelog"
				target="_blank"
				class="bg-white/10 rounded-full text-xl py-4 px-10 hover:bg-[#32F3AE] hover:text-black transition-all"
				>📋 Changelog</a
			>

			<a
				href="https://loomletter.canny.io"
				target="_blank"
				class="bg-white/10 rounded-full text-xl py-4 px-10 hover:bg-[#32F3AE] hover:text-black transition-all"
				>🗺️ Roadmap</a
			>

			<a
				href="https://loomletter.canny.io/feature-requests"
				target="_blank"
				class="bg-white/10 rounded-full text-xl py-4 px-10 hover:bg-[#32F3AE] hover:text-black transition-all"
				>💡 Leave Feedback</a
			>
		</div>
	</div>
</section>
