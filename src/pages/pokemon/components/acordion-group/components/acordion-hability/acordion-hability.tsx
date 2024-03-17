import { Acordion } from "../../../../../../shared/components/acordion/acordion";
import { PokemonAbilities } from "../../../../../../shared/fetchs/pokemon";
import { CardAbility } from "./components/card-ability/card-ability";

export function AcordionHability({
	abilities,
}: Readonly<{
	abilities: PokemonAbilities[];
}>) {
	return (
		<Acordion label="Habilidades">
			<ul>
				{abilities.map((ability) => (
					<CardAbility ability={ability.ability} key={ability.slot} />
				))}
			</ul>
		</Acordion>
	);
}
