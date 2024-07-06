<script>
	import './styles.css';
</script>

<svelte:head>
	<title>Newsletter Reader - LoomLetter</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href="/logo.svg" />
</svelte:head>

<div class="app">
	<main class="w-full max-w-[800px] px-4 mx-auto">
		<slot />
	</main>
	<footer
		class="w-full max-w-[800px] px-4 py-10 mx-auto flex flex-row gap-8 items-center justify-center"
	>
		<p class="text-sm text-[#555555]">&copy; Digital Douglas, The Cayman Islands</p>
		<a class="text-sm text-[#555555] hover:underline" href="/privacy-policy">Privacy Policy</a>
	</footer>
</div>
