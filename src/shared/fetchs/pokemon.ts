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
	weight: number;
	sprites: PokemonSprites;
	types: PokemonType[];
	abilities: PokemonAbilities[];
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
