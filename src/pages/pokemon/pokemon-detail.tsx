import { redirect, useParams } from "react-router-dom";
import { usePokemonDetail } from "../../shared/hooks/usePokemonDetail";
import { HTTP_ENDPOINTS } from "../../shared/constants/http-endpoints";
import { Spinner } from "../../shared/components/spinner/spinner";
import styles from "./pokemon-detail.module.css";

export function PokemonDetailPage() {
	const params = useParams();
	const url = HTTP_ENDPOINTS.Pokemon + "/" + params.id + "/";
	const { data, isError, isLoading } = usePokemonDetail(url);

	if (isError) redirect("/");
	if (isLoading) return <Spinner />;

	return (
		<div>
			<div className={styles.containerImg}>
				<img
					src={data?.sprites.front_default}
					alt={`pokemon ${data?.name}`}
					loading="lazy"
				/>
				<h2>{data?.name}</h2>
			</div>
		</div>
	);
}
