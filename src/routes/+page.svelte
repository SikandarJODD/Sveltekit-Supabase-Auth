<script>
	import Hero from '$lib/components/Hero.svelte';
	export let data;
	$: console.log(data);
</script>

<Hero user={data.email} />
