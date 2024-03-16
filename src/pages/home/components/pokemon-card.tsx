import { Spinner } from "../../../shared/components/spinner/spinner";
import { usePokemonDetail } from "../../../shared/hooks/usePokemonDetail";
import styles from "./pokemon-card.module.css";
interface Props {
	url: string;
}
export function PokemonCard(props: Readonly<Props>) {
	const { data, isLoading, isError } = usePokemonDetail(props.url);
	if (isLoading || isError)
		return (
			<div className={styles.container}>
				<Spinner />
			</div>
		);
	return (
		<div
			className={`${styles.container} ${styles.pointer} ${styles.containerHover}`}
		>
			<img
				src={data?.sprites.front_default}
				alt={`imagen del pokemon ${data?.name}`}
			/>
			<h2>{data?.name}</h2>
		</div>
	);
}
