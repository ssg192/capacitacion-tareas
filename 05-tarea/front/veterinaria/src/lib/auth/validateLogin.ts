/**
 * Client-side validation for the PawPath login form.
 * Keeps rules out of the Svelte component so they stay unit-testable.
 */

export type LoginCredentials = {
	email: string;
	password: string;
};

export type LoginFieldErrors = {
	email?: string;
	password?: string;
};

/** Minimal email shape check (local-part @ domain). */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates login fields before submit.
 * Returns an empty object when credentials look usable.
 */
export function validateLogin(credentials: LoginCredentials): LoginFieldErrors {
	const errors: LoginFieldErrors = {};
	const email = credentials.email.trim();
	const password = credentials.password;

	if (!email) {
		errors.email = 'El correo es obligatorio';
	} else if (!EMAIL_PATTERN.test(email)) {
		errors.email = 'Ingresa un correo válido';
	}

	if (!password) {
		errors.password = 'La contraseña es obligatoria';
	} else if (password.length < 6) {
		errors.password = 'La contraseña debe tener al menos 6 caracteres';
	}

	return errors;
}

/** True when validation produced no field errors. */
export function isLoginValid(credentials: LoginCredentials): boolean {
	return Object.keys(validateLogin(credentials)).length === 0;
}
