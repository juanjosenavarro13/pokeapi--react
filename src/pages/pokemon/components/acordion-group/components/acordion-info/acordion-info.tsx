import { Acordion } from "../../../../../../shared/components/acordion/acordion";
import { PokemonDetail } from "../../../../../../shared/fetchs/pokemon";
import styles from "./acordion-info.module.css";

export function AcordionInfo({
	pokemon,
}: Readonly<{ pokemon: PokemonDetail }>) {
	return (
		<Acordion label="Información" open>
			<div className={styles.container}>
				<p>
					<b>Nombre:</b> {pokemon.name}
				</p>
				<p>
					<b>ID:</b> {pokemon.id}
				</p>
				<p>
					<b>Altura:</b> {pokemon.height / 10} m
				</p>
				<p>
					<b>Peso:</b> {pokemon.weight / 10} Kg
				</p>
			</div>
		</Acordion>
	);
}
