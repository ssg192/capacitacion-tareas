import type { ApodResponse } from '$lib/services/apod.types';

export async function fetchApods(): Promise<ApodResponse[]> {
	const res = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=Gg6B4cvYRtotHhkJTZIZzqOzNZg9LdZSjijZsBnW&count=10`
	);

	if (!res.ok) {
		throw new Error(`NASA APOD error: ${res.status}`);
	}
	return res.json();
}