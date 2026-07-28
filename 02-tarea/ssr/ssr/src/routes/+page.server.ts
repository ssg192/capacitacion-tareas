import { getCharacters } from '$lib/services/get-users';

export async function load() {
	const characters = await getCharacters();
	return {
characters
	};
}