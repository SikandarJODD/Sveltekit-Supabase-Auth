<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import supabase from '$lib/db';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount

	onMount(async () => {
		themeChange(false);
	});

	let navs = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Codes',
			link: '/codes'
		}
	];
	let isCheck = true;
	export let email = '';
	$: console.log(email);
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each navs as item}
					<li><a href={item.link} class="capitalize">{item.name}</a></li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl font-bold text-primary" href="/">Delusion</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 items-center">
			{#each navs as item}
				<li><a href={item.link} class="capitalize mx-1">{item.name}</a></li>
			{/each}
			<li>
				{#if email !== ''}
					<!-- content here -->
					<form method="POST">
						<button class="btn btn-sm capitalize btn-outline" formaction="/" type="submit">
							Log Out</button
						>
					</form>
				{:else}
					<button class="btn btn-sm capitalize btn-outline">
						<a href="/signIn"> Sign In </a>
					</button>
				{/if}
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<button data-act-class="ACTIVECLASS" data-set-theme={isCheck ? 'light' : 'dark'}>
			<input type="checkbox" class="toggle toggle-success" bind:checked={isCheck} />
		</button>
	</div>
</div>
