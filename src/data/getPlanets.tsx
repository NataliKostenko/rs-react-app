import Planet from '@/data/Planet';

export interface PlanetsResult {
	results: Planet[];
	next?: string;
}

export default async function getPlanets(searchTerm: string, currentPage: number): Promise<PlanetsResult> {
	const response = await fetch(`https://swapi.dev/api/planets/?format=json&search=${searchTerm}&page=${currentPage}`);
	return await response.json();
}
