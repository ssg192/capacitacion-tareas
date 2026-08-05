/**
 * Browser tests for the PawPath LoginForm (vitest-browser-svelte).
 */
import { page } from 'vitest/browser';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LoginForm from './LoginForm.svelte';

describe('LoginForm.svelte', () => {
	it('renders email/password labels, primary submit, and secondary create-account action', async () => {
		render(LoginForm);

		await expect.element(page.getByText('Correo Electrónico')).toBeInTheDocument();
		await expect.element(page.getByText('Contraseña')).toBeInTheDocument();
		await expect
			.element(page.getByRole('button', { name: 'Iniciar Sesión' }))
			.toBeInTheDocument();
		await expect.element(page.getByText('Crear cuenta de PawPath')).toBeInTheDocument();
	});

	it('shows validation errors when submitting an empty form', async () => {
		render(LoginForm);

		await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

		await expect.element(page.getByText('El correo es obligatorio')).toBeInTheDocument();
		await expect.element(page.getByText('La contraseña es obligatoria')).toBeInTheDocument();
	});

	it('calls onSubmit with credentials when the form is valid', async () => {
		const onSubmit = vi.fn();
		render(LoginForm, { onSubmit });

		await page.getByLabelText('Correo Electrónico').fill('tutor@pawpath.com');
		await page.getByLabelText('Contraseña').fill('secreto1');
		await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledWith({
			email: 'tutor@pawpath.com',
			password: 'secreto1',
			remember: false
		});
	});
});
