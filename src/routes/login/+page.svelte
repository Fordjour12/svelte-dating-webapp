<script lang="ts">
	import { BrandGoogle } from 'tabler-icons-svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let username: string;
	$: {
		console.log(username);
	}
</script>

<LightSwitch />
<div class="mx-8 grid place-content-center h-screen">
	<h1 class="font-black text-3xl my-8">Login</h1>
	<div class="flex flex-col mx">
		<button class="capitalize font-medium btn variant-glass-primary btn-base mb-4 py-3"
			><BrandGoogle strokeWidth={3} />
			<p class="ml-4">sign in with google</p>
		</button>

		<div class="flex items-center my-3">
			<div class="h-[0.15rem] w-full bg-primary-400" />
			<p class="mx-3">or</p>
			<div class="h-[0.15rem] w-full bg-primary-400" />
		</div>

		<form>
			<input type="text" placeholder="john doew" class="" bind:value={username} />
			<button type="submit" class="font-medium btn variant-glass-primary btn-base mt-5 w-full py-3">
				Log In 🚀
			</button>
		</form>
	</div>
</div>
