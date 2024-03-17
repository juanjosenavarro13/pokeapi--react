import { Link } from "react-router-dom";
import { Spinner } from "../../../../shared/components/spinner/spinner";
import { usePokemonDetail } from "../../../../shared/hooks/usePokemonDetail";
import styles from "./pokemon-card.module.css";
import { NamePokemonColor } from "../../../../shared/components/name-pokemon-color/name-pokemon-color";
interface Props {
	url: string;
}
export function PokemonCard(props: Readonly<Props>) {
	const { data, isLoading, isError } = usePokemonDetail(props.url);
	const loading = isLoading || isError || !data;
	if (loading)
		return (
			<div className={styles.container}>
				<Spinner />
			</div>
		);
	return (
		<Link
			to={`/pokemon/${data?.id}`}
			className={`${styles.container} ${styles.pointer} ${styles.containerHover} ${styles.black}`}
		>
			<img
				src={data?.sprites.front_default}
				alt={`imagen del pokemon ${data?.name}`}
				loading="lazy"
			/>
			<NamePokemonColor name={data.name} types={data.types} />
		</Link>
	);
}
