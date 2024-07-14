<script>
	import './styles.css';
</script>

<svelte:head>
	<title>Newsletter Reader - LoomLetter</title>
	<meta
		name="description"
		content="LoomLetter: Your ultimate solution for managing and reading newsletters. Stay on top of your newsletter subscriptions, inbox spam, and morning briefings with ease. Experience smarter, short form content from sources like Headway app and Substack. Read emails, articles, and more with our intuitive newsletter reader. Perfect for microlearning and self-improvement."
	/>
	<link rel="icon" href="/logo.svg" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

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
	<main class="w-full max-w-[800px] px-4 mx-auto">
		<slot />
	</main>
	<footer
		class="w-full max-w-[800px] px-4 py-10 mx-auto flex flex-wrap flex-row gap-2 md:gap-8 items-center justify-center"
	>
		<p class="text-sm text-[#555555] w-full md:w-auto text-center">
			&copy; Digital Douglas, The Cayman Islands
		</p>
		<a class="text-sm text-[#555555] hover:underline" href="/privacy-policy">Privacy Policy</a>
		<a class="text-sm text-[#555555] hover:underline" href="/press">Press</a>
	</footer>
</div>
