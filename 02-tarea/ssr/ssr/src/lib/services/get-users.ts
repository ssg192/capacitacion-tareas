import type { Users } from '$lib/services/Users';

const API_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(): Promise<Users[]> {
	const response = await fetch(`${API_URL}/character`);
	if (!response.ok) {
		console.error('Status:', response.status, response.statusText);
		const body = await response.text();
		console.error('Body:', body);
		throw new Error('CHARACTERS_NOT_FOUND');
	}
	const data = await response.json();
	return data.results;
}