import axios from "axios";
import { HTTP_ENDPOINTS } from "../constants/http-endpoints";

export interface PokemonResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: { name: string; url: string }[];
}

export async function getPokemonList(page: number) {
	const limit = 20;
	const offset = 20;
	return await axios.get<PokemonResponse>(
		HTTP_ENDPOINTS.PokemonList.replace(
			"{{offset}}",
			(page * offset - limit).toString(),
		).replace("{{limit}}", limit.toString()),
	);
}

export interface PokemonDetail {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: PokemonSprites;
	types: PokemonType[];
	abilities: PokemonAbilities[];
	stats: PokemonStats[];
}

export type typesStatsName =
	| "hp"
	| "speed"
	| "attack"
	| "defense"
	| "special-attack"
	| "special-defense";
export interface PokemonStats {
	base_stat: number;
	effort: number;
	stat: {
		name: typesStatsName;
		url: string;
	};
}

export interface PokemonAbilities {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

export interface PokemonSprites {
	front_default: string;
	back_default: string;
	front_female: string;
	back_female: string;
	front_shiny: string;
	back_shiny: string;
	front_shiny_female: string;
	back_shiny_female: string;
}
export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export async function getPokemonDetail(url: string) {
	const response = await axios.get<PokemonDetail>(url);
	return response.data;
}

export interface PokemonAbilitiesDetail {
	name: string;
}

export async function getPokemonAbility(url: string) {
	const response = await axios.get<PokemonAbilitiesDetail>(url);
	return response.data;
}
