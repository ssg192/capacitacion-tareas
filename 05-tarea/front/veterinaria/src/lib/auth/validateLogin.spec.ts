import { describe, expect, it } from 'vitest';
import { isLoginValid, validateLogin } from './validateLogin';

describe('validateLogin', () => {
	it('accepts a well-formed email and password', () => {
		expect(
			validateLogin({
				email: 'ejemplo@correo.com',
				password: 'secreto'
			})
		).toEqual({});
		expect(isLoginValid({ email: 'ejemplo@correo.com', password: 'secreto' })).toBe(true);
	});

	it('requires email and password', () => {
		expect(validateLogin({ email: '  ', password: '' })).toEqual({
			email: 'El correo es obligatorio',
			password: 'La contraseña es obligatoria'
		});
	});

	it('rejects invalid email shapes', () => {
		expect(validateLogin({ email: 'no-es-correo', password: 'secreto' })).toEqual({
			email: 'Ingresa un correo válido'
		});
	});

	it('rejects short passwords', () => {
		expect(validateLogin({ email: 'a@b.co', password: '123' })).toEqual({
			password: 'La contraseña debe tener al menos 6 caracteres'
		});
	});

	it('trims email before validating', () => {
		expect(validateLogin({ email: '  ok@paw.path  ', password: '123456' })).toEqual({});
	});
});
