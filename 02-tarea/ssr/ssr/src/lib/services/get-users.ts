import type { Users } from '$lib/services/Users';

const API_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(): Promise<Users[]> {
		const response = await fetch(`${API_URL}/character`);
		if (!response.ok) {
			throw new Error('CHARACTERS_NOT_FOUND');
		}
		const data = await response.json();
	return data.results;
	}