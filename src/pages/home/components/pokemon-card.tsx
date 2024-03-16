import { PokemonDetail } from "../../../axios/fetchs/pokemon";
import styles from "./pokemon-card.module.css";
interface Props {
	pokemon: PokemonDetail;
}
export function PokemonCard(props: Readonly<Props>) {
	const { pokemon } = props;
	const { name, sprites } = pokemon;
	return (
		<div className={styles.container}>
			<img src={sprites.front_default} alt={`imagen del pokemon ${name}`} />
			<h2>{name}</h2>
		</div>
	);
}
