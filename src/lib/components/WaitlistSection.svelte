<script lang="ts">
	import { whenInView } from '$lib/lib';
	import { track } from '$lib/track';

	import Apple from './icons/Apple.svelte';

	export let sectionName: string;

	let emailAddress = '';
	let joining = false;

	const onTrackCtaClick = async (event: SubmitEvent) => {
		track('CtaClick2');
	};

	const onTrackViewSection = (sectionName: string) => () => {
		track('ViewSection_' + sectionName);
	};
</script>

<section
	class="w-full pb-20 md:pb-[200px] pt-8"
	id="waitlist"
	use:whenInView={onTrackViewSection(sectionName)}
>
	<div class="flex flex-col gap-10 md:gap-10 items-center">
		<div class="flex-grow flex flex-col gap-8 justify-start">
			<p class="text-5xl md:text-7xl -text-gradient font-bold text-center">Join 200+ Readers</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px] mx-auto">
				Subscribe to your favorite newsletters and access them in one place. Stay organized, reduce
				inbox clutter, and never miss an update with LoomLetter.
			</p>
		</div>

		<div class="w-full md:w-[1000px] shrink-0 flex flex-col items-center justify-center">
			<a
				on:click={onTrackCtaClick}
				class="-cta-gradient w-fit bg-white/10 hover:bg-white/30 px-5 md:px-12 py-4 rounded-full font-bold transition-all"
				href="https://apps.apple.com/us/app/newsletter-reader-loomletter/id6538716924"
				target="_blank"
			>
				<p class="text-black text-xl lg:text-2xl text-center flex flex-row items-center gap-2">
					<Apple /> <span>Download Now</span>
				</p>
			</a>
		</div>
	</div>
</section>
