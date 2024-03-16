import axios from "axios";
import { HTTP_ENDPOINTS } from "../constants/http-endpoints";

export interface PokemonResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: { name: string; url: string }[];
}

export async function getPokemonsList() {
	const PokemonList = await axios.get<PokemonResponse>(HTTP_ENDPOINTS.Pokemon);
	const PokemonListDetailPromises = PokemonList.data.results.map((Pokemon) =>
		getPokemonDetail(Pokemon.url),
	);

	const PokemonListDetail = await Promise.all(PokemonListDetailPromises);
	const { count, next, previous } = PokemonList.data;

	return { count, next, previous, result: PokemonListDetail };
}

interface PokemonDetail {
	id: number;
	name: string;
	height: number;
}

async function getPokemonDetail(url: string) {
	const response = await axios.get<PokemonDetail>(url);
	return response.data;
}
