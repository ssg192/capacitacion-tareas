<script lang="ts">
	/**
	 * PawPath login form (Pet Clay).
	 * Validates with `$lib/auth/validateLogin` before calling `onSubmit`.
	 */
	import { validateLogin, type LoginFieldErrors } from '$lib/auth/validateLogin';

	type LoginSubmitPayload = {
		email: string;
		password: string;
		remember: boolean;
	};

	let {
		onSubmit,
		createAccountHref = '#',
		forgotPasswordHref = '#'
	}: {
		/** Called only after client-side validation succeeds. */
		onSubmit?: (credentials: LoginSubmitPayload) => void;
		createAccountHref?: string;
		forgotPasswordHref?: string;
	} = $props();

	let email = $state('');
	let password = $state('');
	let remember = $state(false);
	let showPassword = $state(false);
	let errors = $state<LoginFieldErrors>({});
	/** Once true, keep showing field errors after each submit attempt. */
	let submittedOnce = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submittedOnce = true;
		errors = validateLogin({ email, password });
		if (Object.keys(errors).length > 0) return;
		onSubmit?.({ email: email.trim(), password, remember });
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<!-- Form + secondary CTA stay together so the page only owns brand/atmosphere chrome -->
<form class="w-full space-y-6" onsubmit={handleSubmit} novalidate>
	<!-- Email: leading icon is decorative; label remains the accessible name -->
	<div class="space-y-2">
		<label class="ml-4 text-label-md text-on-surface-variant" for="login-email">
			Correo Electrónico
		</label>
		<div class="group relative flex items-center">
			<span
				class="material-symbols-outlined pointer-events-none absolute left-5 text-outline transition-colors group-focus-within:text-primary"
				aria-hidden="true"
			>
				mail
			</span>
			<input
				id="login-email"
				class="w-full rounded-full bg-surface-container-low py-4 pr-6 pl-14 text-body-md text-on-surface shadow-clay-inset outline-none transition-shadow focus:shadow-clay-input-focus"
				type="email"
				name="email"
				autocomplete="email"
				placeholder="ejemplo@correo.com"
				bind:value={email}
				aria-invalid={submittedOnce && !!errors.email}
				aria-describedby={errors.email ? 'login-email-error' : undefined}
			/>
		</div>
		{#if errors.email}
			<p id="login-email-error" class="ml-4 text-label-sm text-error" role="alert">
				{errors.email}
			</p>
		{/if}
	</div>

	<!-- Password: visibility toggle is type="button" so it never submits the form -->
	<div class="space-y-2">
		<div class="flex items-center justify-between px-4">
			<label class="text-label-md text-on-surface-variant" for="login-password">Contraseña</label>
			<a
				class="text-label-sm text-primary hover:underline"
				href={forgotPasswordHref}
			>
				¿Olvidaste tu contraseña?
			</a>
		</div>
		<div class="group relative flex items-center">
			<span
				class="material-symbols-outlined pointer-events-none absolute left-5 text-outline transition-colors group-focus-within:text-primary"
				aria-hidden="true"
			>
				lock
			</span>
			<input
				id="login-password"
				class="w-full rounded-full bg-surface-container-low py-4 pr-14 pl-14 text-body-md text-on-surface shadow-clay-inset outline-none transition-shadow focus:shadow-clay-input-focus"
				type={showPassword ? 'text' : 'password'}
				name="password"
				autocomplete="current-password"
				placeholder="••••••••"
				bind:value={password}
				aria-invalid={submittedOnce && !!errors.password}
				aria-describedby={errors.password ? 'login-password-error' : undefined}
			/>
			<button
				type="button"
				class="absolute right-5 text-outline transition-colors hover:text-primary"
				onclick={togglePasswordVisibility}
				aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
				aria-pressed={showPassword}
			>
				<span class="material-symbols-outlined" aria-hidden="true">
					{showPassword ? 'visibility_off' : 'visibility'}
				</span>
			</button>
		</div>
		{#if errors.password}
			<p id="login-password-error" class="ml-4 text-label-sm text-error" role="alert">
				{errors.password}
			</p>
		{/if}
	</div>

	<!--
		Clay checkbox: native input stays in the a11y tree (peer + appearance-none).
		Check glyph is visual-only and scales in via peer-checked.
	-->
	<div class="flex items-center space-x-3 px-4">
		<div class="relative flex h-6 w-6 items-center justify-center">
			<input
				id="login-remember"
				class="peer h-6 w-6 cursor-pointer appearance-none rounded-lg bg-surface-container-low shadow-clay-inset transition-all checked:bg-primary"
				type="checkbox"
				name="remember"
				bind:checked={remember}
			/>
			<span
				class="material-symbols-outlined pointer-events-none absolute scale-0 text-sm text-on-primary transition-transform peer-checked:scale-100"
				aria-hidden="true"
			>
				check
			</span>
		</div>
		<label class="cursor-pointer text-label-md text-on-surface-variant" for="login-remember">
			Recordarme
		</label>
	</div>

	<!-- Primary CTA: mint primary + clay press feedback -->
	<button
		type="submit"
		class="mt-4 w-full rounded-lg bg-primary py-4 text-headline-md text-on-primary shadow-clay-button transition-transform active:scale-95 active:shadow-clay-button-pressed"
	>
		Iniciar Sesión
	</button>
</form>

<!-- Secondary family onboarding action uses secondary (sky), not primary mint -->
<div class="mt-10 text-center">
	<p class="mb-4 text-body-md text-on-surface-variant">¿Eres nuevo en la familia?</p>
	<a
		href={createAccountHref}
		class="inline-block rounded-full border-2 border-secondary-container px-8 py-3 text-label-md text-secondary transition-colors hover:bg-secondary-fixed"
	>
		Crear cuenta de PawPath
	</a>
</div>
