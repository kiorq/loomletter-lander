<script lang="ts">
	import { track } from '$lib/track';

	const onTrackDownload = (name: string) => () => {
		track('PressDwn_' + name);
	};

	const onContactTrack = () => {
		track('PressContactClick');
	};
</script>

<svelte:head>
	<title>Press (Newsletter Reader LoomLetter)</title>
	<meta
		name="description"
		content="The newsletter reader tailored for time-strapped professionals. With LoomLetter's AI-powered newsletter narrator, effortlessly manage and listen to your favorite newsletters on the go. Stay on top of subscriptions with push notifications, quick access widgets, and more. Perfect for staying informed and productive."
	/>
</svelte:head>

<main class="flex flex-col gap-0 pb-32">
	<div class="flex flex-col">
		<h2 class="mb-5 text-4xl font-semibold">Press</h2>
	</div>

	<section class="mb-8">
		<p class="text-white/80">
			Here you can find promotional assets and screenshots for press use. Clicking on an asset will
			trigger a download.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">About LoomLetter</h2>

		<p class="text-white/80">
			LoomLetter is the ultimate newsletter reader for busy professionals who simply don’t have the
			time. Seamlessly syncing with your inbox, LoomLetter extracts and organizes newsletters,
			making them easily accessible in one place. With features like AI-powered reading for
			listening on-the-go, widgets for quick access, instant notifications for new content, and
			offline support for reading anywhere, LoomLetter redefines how you engage with your
			newsletters. Designed with convenience and user experience in mind, LoomLetter ensures you
			never miss an update, providing a polished and intuitive interface that simplifies your
			digital reading experience.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">App Icons</h2>

		<a
			href="/press/app-icon.png"
			download="loomletter-app-icon.png"
			class="downloadable-asset"
			on:click={onTrackDownload('Icon')}
		>
			<img src="/press/app-icon.png" class="w-52 h-52" />
		</a>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Promo Banners</h2>

		<p class="text-white/80">
			The dimensions for each banner are 2048 x 1024 pixels, with file sizes ranging from 1.3 to 1.6
			MB.
		</p>

		<p class="text-white/80 mb-5">
			<a
				class="font-medium hover:underline text-[#32F3AE]"
				href="mailto:loomletter@digidouglas.com"
				on:click={onContactTrack}
			>
				Send an email
			</a>
			if you require a custom banner.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<a
				href="/press/press-6.png"
				download="loomletter-press-declutter-inbox.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press6')}
			>
				<img src="/press/press-6.png" />
			</a>

			<a
				href="/press/press-1.png"
				download="loomletter-press-1.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press1')}
			>
				<img src="/press/press-1.png" />
			</a>

			<a
				href="/press/press-2.png"
				download="loomletter-press-2.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press2')}
			>
				<img src="/press/press-2.png" />
			</a>

			<a
				href="/press/press-3.png"
				download="loomletter-press-ai-reading.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press3')}
			>
				<img src="/press/press-3.png" />
			</a>

			<a
				href="/press/press-4.png"
				download="loomletter-press-widgets.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press4')}
			>
				<img src="/press/press-4.png" />
			</a>

			<a
				href="/press/press-5.png"
				download="loomletter-press-push-notifications.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Press5')}
			>
				<img src="/press/press-5.png" />
			</a>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Promo Poster</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<a
				href="/press/ad-1.png"
				download="loomletter-ad-copy-1.png"
				class="downloadable-asset"
				on:click={onTrackDownload('Ad1')}
			>
				<img src="/press/ad-1.png" />
			</a>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Anymore questions?</h2>

		<p class="text-white/80">
			Reach out to me at <a
				class="font-medium hover:underline text-[#32F3AE]"
				href="mailto:loomletter@digidouglas.com"
				on:click={onContactTrack}>loomletter@digidouglas.com</a
			>
		</p>
	</section>
</main>

<style lang="scss">
	.downloadable-asset {
		@apply block w-fit rounded-2xl hover:border-[#00E0FF] border-[3px] border-white/30 overflow-hidden;
	}
</style>
