import { PokemonDetail } from "../../../../shared/fetchs/pokemon";
import { AcordionHability } from "./components/acordion-hability/acordion-hability";
export function AcordionGroup({
	pokemon,
}: Readonly<{ pokemon: PokemonDetail }>) {
	return (
		<>
			<AcordionHability abilities={pokemon.abilities} />
			<AcordionHability abilities={pokemon.abilities} />
			<AcordionHability abilities={pokemon.abilities} />
		</>
	);
}
