import { PokemonType } from "../fetchs/pokemon";

export function getPokemonTypeColor(types: PokemonType[]): string {
	const defaultColor = "#000000";
	const typeColors: { [key: string]: string } = {
		normal: "#A8A77A",
		fire: "#EE8130",
		fighting: "#C22E28",
		water: "#6390F0",
		flying: "#A98FF3",
		grass: "#7AC74C",
		poison: "#A33EA1",
		electric: "#F7D02C",
		ground: "#E2BF65",
		psychic: "#F95587",
		rock: "#B6A136",
		ice: "#96D9D6",
		bug: "#A6B91A",
		dragon: "#6F35FC",
		ghost: "#735797",
		dark: "#705746",
		steel: "#B7B7CE",
		fairy: "#D685AD",
	};
	if (!types) return defaultColor;

	if (types.length > 0) {
		const firstType = types[0].type.name;
		return typeColors[firstType] || defaultColor;
	}

	return defaultColor;
}
