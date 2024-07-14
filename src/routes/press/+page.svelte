<svelte:head>
	<title>Press (Newsletter Reader - LoomLetter)</title>
</svelte:head>

<header class="py-8 sticky top-0 bg-white flex flex-col md:flex-row md:justify-between">
	<a href="/" class="flex items-center justify-start gap-3">
		<img src="/logo.svg" alt="LoomLetter Icon" width="40" height="40" />
		<p class="text-2xl font-medium">LoomLetter</p>
	</a>

	<div class="flex flex-row gap-4">
		<a href="/press" class="py-2 px-4 hover:underline text-[#066252]"> Press </a>
		<a href="/privacy-policy" class="py-2 px-4 hover:underline text-[#066252]"> Privacy Policy </a>
	</div>
</header>

<main class="flex flex-col gap-0 pb-32">
	<div class="flex flex-col">
		<h2 class="mb-5 text-4xl font-semibold">Press</h2>
	</div>

	<section class="mb-8">
		<p class="text-gray-600">
			Here you can find promotional assets and screenshots for press use. Clicking on an asset will
			trigger a download.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">About LoomLetter</h2>

		<p class="text-gray-600">
			LoomLetter is your ultimate solution for staying connected with your favorite newsletters
			effortlessly. Seamlessly syncing with your inbox, LoomLetter extracts and organizes
			newsletters, making them easily accessible in one place. With features like AI Reading for
			listening to your favorite newsletters on-the-go, widgets for quick access on the latest
			newsletters, instant notifications for new content, and offline support for reading anywhere,
			LoomLetter redefines how you engage with your newsletters. Designed with convenience and user
			experience in mind, LoomLetter ensures you never miss an update, providing a polished and
			intuitive interface that simplifies your digital reading experience.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">App Icons</h2>

		<a href="/press/app-icon.png" download="loomletter-app-icon.png" class="downloadable-asset">
			<img src="/press/app-icon.png" class="w-52 h-52" />
		</a>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Promo Banners</h2>

		<p class="text-gray-600">
			The dimensions for each banner are 2048 x 1024 pixels, with file sizes ranging from 1.3 to 1.6
			MB.
		</p>

		<p class="text-gray-600 mb-5">
			<a
				class="font-medium hover:underline text-[#066252]"
				href="mailto:loomletter@digidouglas.com"
			>
				Send an email
			</a>
			if you require a custom banner.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<a href="/press/press-1.png" download="loomletter-press-1.png" class="downloadable-asset">
				<img src="/press/press-1.png" />
			</a>

			<a href="/press/press-2.png" download="loomletter-press-2.png" class="downloadable-asset">
				<img src="/press/press-2.png" />
			</a>

			<a
				href="/press/press-3.png"
				download="loomletter-press-ai-reading.png"
				class="downloadable-asset"
			>
				<img src="/press/press-3.png" />
			</a>

			<a
				href="/press/press-4.png"
				download="loomletter-press-widgets.png"
				class="downloadable-asset"
			>
				<img src="/press/press-4.png" />
			</a>

			<a
				href="/press/press-5.png"
				download="loomletter-press-push-notifications.png"
				class="downloadable-asset"
			>
				<img src="/press/press-5.png" />
			</a>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Anymore questions?</h2>

		<p class="text-gray-600">
			Reach out to me at <a
				class="font-medium hover:underline text-[#066252]"
				href="mailto:loomletter@digidouglas.com">loomletter@digidouglas.com</a
			>
		</p>
	</section>
</main>

<style lang="scss">
	.downloadable-asset {
		@apply block w-fit border-2 rounded-2xl hover:border-[#32F3AE] overflow-hidden;
	}
</style>
