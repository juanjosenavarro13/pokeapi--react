import { PokemonType } from "../../fetchs/pokemon";
import { getPokemonTypeColor } from "../../utils/getColorName";
import styles from "./name-pokemon-color.module.css";

interface Props {
	name: string;
	types: PokemonType[];
}
export function NamePokemonColor(props: Readonly<Props>) {
	return (
		<h2
			className={styles.text}
			style={{ color: getPokemonTypeColor(props?.types) }}
		>
			{props.name}
		</h2>
	);
}
