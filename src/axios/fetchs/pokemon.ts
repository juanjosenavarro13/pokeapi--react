import axios from "axios";
import { HTTP_ENDPOINTS } from "../constants/http-endpoints";

export interface PokemonResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: { name: string; url: string }[];
}

export async function getPokemonList() {
	return await axios.get<PokemonResponse>(HTTP_ENDPOINTS.Pokemon);
}

export interface PokemonDetail {
	id: number;
	name: string;
	height: number;
	sprites: {
		front_default: string;
	};
}

export async function getPokemonDetail(url: string) {
	const response = await axios.get<PokemonDetail>(url);
	return response.data;
}
