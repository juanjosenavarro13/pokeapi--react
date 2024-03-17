import { Acordion } from "../../../../../../shared/components/acordion/acordion";
import { PokemonAbilities } from "../../../../../../shared/fetchs/pokemon";

export function AcordionHability({
	abilities,
}: Readonly<{
	abilities: PokemonAbilities[];
}>) {
	return (
		<Acordion label="Habilidades">
			<ul style={{ textAlign: "center", listStyle: "none" }}>
				{abilities.map((ability) => (
					<li key={ability.slot}>
						<p>
							<b>slot {ability.slot}:</b> {ability.ability.name} [
							{ability.is_hidden ? "Visible" : "Invisible"}]
						</p>
					</li>
				))}
			</ul>
		</Acordion>
	);
}
