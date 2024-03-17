import { PokemonDetail } from "../../../../shared/fetchs/pokemon";
import { AcordionHability } from "./components/acordion-hability/acordion-hability";
import { AcordionImg } from "./components/acordion-img/acordion-img";
import { AcordionInfo } from "./components/acordion-info/acordion-info";
import { AcordionStats } from "./components/acordion-stats/acordion-stats";
export function AcordionGroup({
	pokemon,
}: Readonly<{ pokemon: PokemonDetail }>) {
	return (
		<>
			<AcordionInfo pokemon={pokemon} />
			<AcordionImg sprites={pokemon.sprites} />
			<AcordionHability abilities={pokemon.abilities} />
			<AcordionStats stats={pokemon.stats} />
		</>
	);
}
