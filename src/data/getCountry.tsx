import Country from "./Country";

export interface CountriesResult {
	results: Country[];

}

export default async function getCountries(searchTerm: string): Promise<CountriesResult> {
	const response = await fetch(`https://restcountries.com/v3.1/all=json&search=${searchTerm}`);
	return await response.json();
}