<script lang="ts">
	export let href: string;
	export let title: string;
	export let descr: string;
</script>

<a
	{href}
	class="bg-white/5 px-6 py-4 rounded-3xl border border-[#32F3AE]/10 hover:bg-[#32F3AE] hover:text-black transition-all"
>
	<p class="text-xl">
		{title}
	</p>
	<p class="text-md opacity-60">
		{descr}
	</p>
</a>
