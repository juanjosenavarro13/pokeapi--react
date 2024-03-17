import { Acordion } from "../../../../../../shared/components/acordion/acordion";
import {
	PokemonStats,
	typesStatsName,
} from "../../../../../../shared/fetchs/pokemon";
import styles from "./acordion-stats.module.css";
export function AcordionStats({ stats }: Readonly<{ stats: PokemonStats[] }>) {
	const dictionaryStatsTranslate: Record<typesStatsName, string> = {
		attack: "Ataque",
		defense: "Defensa",
		hp: "Vida",
		speed: "Velocidad",
		"special-attack": "Ataque especial",
		"special-defense": "Defensa especial",
	};

	return (
		<Acordion label="Caracteristicas">
			<div className={styles.container}>
				{stats.map((stat) => (
					<p key={stat.stat.url}>
						<b>{dictionaryStatsTranslate[stat.stat.name]}: </b>
						{stat.base_stat}
					</p>
				))}
			</div>
		</Acordion>
	);
}
