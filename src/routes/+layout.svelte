<script>
	import '../app.postcss';
	import NavBar from '$lib/components/NavBar.svelte';
	export let data;
</script>

<NavBar email={data.email} />
<slot />
