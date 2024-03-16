import axios from "axios";
import { HTTP_ENDPOINTS } from "../constants/http-endpoints";

export interface PokemonResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Result[];
}

interface Result {
	name: string;
	url: string;
}

export function getPokemons() {
	return axios.get<PokemonResponse>(HTTP_ENDPOINTS.pokemon);
}
