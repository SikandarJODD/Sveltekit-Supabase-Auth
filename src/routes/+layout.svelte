<script>
	import '../app.postcss';
	import NavBar from '$lib/components/NavBar.svelte';
	export let data;
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount

	onMount(async () => {
		themeChange(false);
	});
</script>

<NavBar email={data.email} />
<slot />
