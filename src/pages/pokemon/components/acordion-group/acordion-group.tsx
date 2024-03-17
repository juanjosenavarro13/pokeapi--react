import { PokemonDetail } from "../../../../shared/fetchs/pokemon";
import { AcordionHability } from "./components/acordion-hability/acordion-hability";
import { AcordionInfo } from "./components/acordion-info/acordion-info";
export function AcordionGroup({
	pokemon,
}: Readonly<{ pokemon: PokemonDetail }>) {
	return (
		<>
			<AcordionInfo pokemon={pokemon} />
			<AcordionHability abilities={pokemon.abilities} />
		</>
	);
}
