<!--
	PawPath login screen — Pet Clay atmosphere + centered clay card.
	Decorative orbs/images are aria-hidden; interactive content lives in LoginForm.
-->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import LoginForm from '$lib/components/login/LoginForm.svelte';
	import type { LoginRequest, LoginResponse } from '$lib/models/login';

	/** Placeholder until auth wiring lands; keeps submit path testable via the form. */
	async function handleLogin(credentials: { email: string; password: string; remember: boolean }) {
		const response = await fetch('http://localhost:8080/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password
			} satisfies LoginRequest),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.ok) {
			const data = await response.json() as LoginResponse;
			localStorage.setItem('user', JSON.stringify(data.user));
			goto(resolve('/home'));
		} else {
			throw new Error('Failed to login');
		}
	}

</script>

<svelte:head>
	<title>PawPath - Iniciar Sesión</title>
</svelte:head>

<div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface p-4">
	<!-- Soft floating orbs: animation-delay needs inline style (not expressible as a theme utility) -->
	<div
		class="animate-float absolute top-10 left-10 h-32 w-32 rounded-full bg-primary-container/30 blur-3xl"
		style="animation-delay: 0s;"
		aria-hidden="true"
	></div>
	<div
		class="animate-float absolute right-10 bottom-20 h-48 w-48 rounded-full bg-secondary-container/20 blur-3xl"
		style="animation-delay: 2s;"
		aria-hidden="true"
	></div>
	<div
		class="animate-float absolute top-1/2 left-20 h-16 w-16 rounded-full bg-tertiary-container/40 blur-2xl"
		style="animation-delay: 1s;"
		aria-hidden="true"
	></div>

	<!-- Stitch texture images: low opacity, non-interactive so they never steal clicks/focus -->
	<div class="pointer-events-none fixed top-[-5%] right-[-5%] select-none opacity-10" aria-hidden="true">
		<img
			class="h-96 w-96 object-contain"
			alt=""
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOAz7JcMBmvXTe1XR_R-PnrntuYWGudunB9vStblNBHwnlXZsLoIevFDiHWL2Uc_ZPEfFzI_6vFixgw-G7Hq1PpyUOJYwu0RFhDrDYZRT2VAlBETgblFv4SyUWqEvCt0rl6WRQvgC9GnkDjlHnaTwsssxmtX7PUbUc0d8nyPt348_y5ILkizzRJXUfd43aeFBdljqLSsdB9TXdKVyeLemsd5ngydGZiVcXyEZRIUpMWWGAKbgSRr2R"
		/>
	</div>
	<div class="pointer-events-none fixed bottom-[-10%] left-[-5%] select-none opacity-10" aria-hidden="true">
		<img
			class="h-80 w-80 object-contain"
			alt=""
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpL9D4MArFe8Ka-vB3E4W3gz5YoLsvpm1CzxXxglrRN4HOzVLQmseQvdmGGJLKr8YmyiYlKNdlNwc2JtY0bvvBu-_b7EYHjglY8dw6cHH-H978eT3c6EI9JVuo9TaTRsQbsm53ZaemUKAxbVwHLzKDbKnGbkvw1FWqeWhh7GaCd1Mh9TPM36aG57NZph-QDbtj8tbhEboDB56czo4Qj5MtDwHI8Ovpc0OXGMgxdetzvGCImC2nfvu4"
		/>
	</div>

	<main class="relative z-10 w-full max-w-md">
		<div
			class="flex flex-col items-center rounded-xl bg-surface-container-lowest p-8 shadow-clay-card md:p-12"
		>
			<!-- Logo mark: FILL variation needs Material Symbols font-variation-settings -->
			<div
				class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed shadow-clay-logo"
			>
				<span
					class="material-symbols-outlined text-4xl text-primary"
					style="font-variation-settings: 'FILL' 1;"
					aria-hidden="true"
				>
					pets
				</span>
			</div>

			<div class="mb-10 text-center">
				<h1 class="mb-2 text-headline-lg-mobile text-primary md:text-headline-lg">PawPath</h1>
				<p class="text-body-md text-on-surface-variant">Cuidamos el camino de tu mascota</p>
			</div>

			<LoginForm onSubmit={handleLogin} />
		</div>

		<div class="mt-8 px-4 text-center">
			<p class="text-label-sm text-outline opacity-60">
				Seguridad veterinaria de nivel premium con un toque de cariño digital.
			</p>
		</div>
	</main>
</div>
