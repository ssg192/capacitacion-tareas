import { fetchApods } from '$lib/services/apod.client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const apods = await fetchApods();
	const filteredApods = apods.filter((apod) => apod.media_type === 'image');
	return { apods: filteredApods };
};
