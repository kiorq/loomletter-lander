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
			<p class="text-5xl md:text-7xl -text-gradient font-bold text-center">
				Join 150+ Early Adopters
			</p>

			<p class="text-lg text-white text-center w-full md:max-w-[700px] mx-auto">
				Be among the first to experience LoomLetter alongside our growing community. Join our Early
				Adopter Program to get exclusive early access, provide feedback, and help shape the future
				of our app. Sign up now to secure your spot and enjoy unique benefits designed just for our
				early users.
			</p>
		</div>

		<div class="w-full md:w-[1000px] shrink-0 flex flex-col items-center justify-center">
			<a
				on:click={onTrackCtaClick}
				class="-cta-gradient w-fit bg-white/10 hover:bg-white/30 px-5 md:px-12 py-4 rounded-full font-bold transition-all"
				href="https://testflight.apple.com/join/Jynt22qF"
				target="_blank"
				><p class="text-black text-xl lg:text-2xl text-center flex flex-row items-center gap-2">
					<Apple /> <span>Try Now</span>
				</p></a
			>
		</div>

		<p class="text-white/80 text-center w-full md:max-w-[700px] mx-auto">
			Early Adopter Program Available for iOS only
		</p>

		<div>
			<!-- <p class="text-2xl font-medium text-center text-white/80 mb-3">Early Adopter Benefits</p> -->
			<div class="flex flex-row flex-wrap gap-4 justify-center items-center md:px-10">
				<div class="bg-white/10 rounded-full py-2 px-5">🚀 Exclusive Early Access</div>
				<div class="bg-white/10 rounded-full py-2 px-5">🛠️ Priority Feature Requests</div>
				<div class="bg-white/10 rounded-full py-2 px-5">💬 Direct Feedback Loop</div>
				<div class="bg-white/10 rounded-full py-2 px-5">🔒 Free Lifetime Subscription</div>
				<div class="bg-white/10 rounded-full py-2 px-5">👑 Early User Perks</div>
			</div>
		</div>
	</div>
</section>
