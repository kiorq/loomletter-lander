<script lang="ts">
	import { onMount } from 'svelte';
	import './styles.css';
	import mixpanel from 'mixpanel-browser';
	import { browser } from '$app/environment';
	import { refererData } from '$lib/track';

	onMount(() => {
		mixpanel.init('90c925075e28665e77389e4699dbb029', {
			debug: false,
			persistence: 'localStorage',
			ignore_dnt: true
		});

		if (browser) {
			mixpanel.track_pageview({
				...refererData()
			});

			mixpanel.register_once({
				...refererData()
			});
		}
	});
</script>

<svelte:head>
	<title>Newsletter Reader - LoomLetter</title>
	<meta
		name="description"
		content="The newsletter reader tailored for time-strapped professionals. With LoomLetter's AI-powered newsletter narrator, effortlessly manage and listen to your favorite newsletters on the go. Stay on top of subscriptions with push notifications, quick access widgets, and more. Perfect for staying informed and productive."
	/>
	<link rel="icon" href="/logo.svg" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<meta property="og:title" content="The Newsletter Reader for Professionals - LoomLetter" />
	<meta property="og:image" content="https://loomletter.app/press/press-2.png" />

	<meta name="twitter:title" content="The Newsletter Reader for Professionals - LoomLetter" />
	<meta
		name="twitter:description"
		content="The newsletter reader tailored for time-strapped professionals. With LoomLetter's AI-powered newsletter narrator, effortlessly manage and listen to your favorite newsletters on the go. Stay on top of subscriptions with push notifications, quick access widgets, and more. Perfect for staying informed and productive."
	/>
	<meta name="twitter:image" content="https://loomletter.app/press/press-2.png" />
	<meta name="twitter:card" content="summary_large_image" />

	<meta
		name="keywords"
		content="
        Newsletters,
        newsletter subscription,
        Inbox spam,
        briefing,
        morning briefing,
        Newsletter unsubscribe,
        Email for newsletters,
        Email newsletters,
        email newsletter inbox,
        Newsletter reader,
        Smarter,
        Short form,
        Headway app,
        Read emails,
        Article reader,
        Article read,
        Read later,
        Sub stack,
        neesletters,
        newslettwr,
        newslette,
        newslatter,
        email analytics,
        email newsletter reader,
        Microlearning,
        Subscriptions,
        The dispatch,
        Newsletter,
        Micro learning free,
        Deep stash,
        Gmqil,
        Meco,
        Press reader,
        Subscription,
        Bookmarks,
        summarize,
        Gmaul,
        Gmaik,
        Reeder 5,
        tldr,
        entrepreneur,
        Bites,
        Inoreader,
        Bookmark,
        Substack com,
        Todayistheday,
        Micro learning,
        RSS reader,
        Reading apps for free,
        Substack reader,
        Readies reader,
        Self improvement,
        Instapaper,
        Reeder,
        Read books for free,
        Readit,
        Blogger,
        RSS,
        Blog,
        Readwise,
        Headway app,
        Ebook Reader,
        Catch up,
        Smart news,
        Smartnews,
        Reader,
        tucker carlson app,
        Inbox,
        mailchimp,
        Flipboard,
        Spam,
        Everyday,
        Medium,
        Blinkist,
        business suite,
        Substack,
        news,
        read newsletters,
        read newsletter,
		substack.com,
		substack newsletters,
		Gmail,
		The CEO Report,
		Morning's Brew,
		The Average Joe,
		Gmail newsletters,
    "
	/>
</svelte:head>

<div class="app">
	<!-- header -->
	<div class="flex flex-row justify-between w-full max-w-[1200px] mx-auto px-4 py-10">
		<a href="/">
			<div class="flex flex-row gap-5 items-center">
				<img src="/logo.svg" alt="LoomLetter Icon" width="40" height="40" />
				<p class="text-3xl font-medium text-white hidden md:block">LoomLetter</p>
			</div>
		</a>
		<div class="flex flex-row justify-end gap-4">
			<a href="/press" class="py-2.5 px-6 hover:bg-white/10 text-white rounded-3xl transition-all"
				>Press</a
			>
			<a
				href="/privacy-policy"
				class="py-2.5 px-6 hover:bg-white/10 text-white rounded-3xl transition-all"
			>
				Privacy Policy
			</a>
		</div>
	</div>
	<!-- main -->
	<main class="w-full max-w-[1200px] px-4 mx-auto">
		<slot />
	</main>
	<footer
		class="w-full max-w-[800px] px-4 py-10 mx-auto flex flex-wrap flex-row gap-2 md:gap-8 items-center justify-center"
	>
		<p class="text-sm text-white/60 w-full md:w-auto text-center">&copy; Digital Douglas 2024</p>
		<a class="text-sm text-white/60 hover:underline" href="/privacy-policy">Privacy Policy</a>
		<a class="text-sm text-white/60 hover:underline" href="/press">Press</a>
	</footer>
</div>
