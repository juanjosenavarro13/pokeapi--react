import { redirect, useParams } from "react-router-dom";
import { NamePokemonColor } from "../../shared/components/name-pokemon-color/name-pokemon-color";
import { Spinner } from "../../shared/components/spinner/spinner";
import { HTTP_ENDPOINTS } from "../../shared/constants/http-endpoints";
import { usePokemonDetail } from "../../shared/hooks/usePokemonDetail";
import styles from "./pokemon-detail.module.css";
import { useState } from "react";
import { Modal } from "../../shared/components/modal/modal";

export function PokemonDetailPage() {
	const params = useParams();
	const url = HTTP_ENDPOINTS.Pokemon + "/" + params.id + "/";
	const { data, isError, isLoading } = usePokemonDetail(url);
	const [modalImg, setModalImg] = useState<boolean>(false);

	if (isError) redirect("/");
	if (isLoading || !data) return <Spinner />;

	return (
		<div>
			<button
				className={styles.containerImg}
				onMouseEnter={() => {
					setModalImg(true);
				}}
			>
				<img
					src={data?.sprites.front_default}
					alt={`pokemon ${data?.name}`}
					loading="lazy"
				/>
				<NamePokemonColor name={data.name} types={data.types} />
			</button>
			<Modal
				isOpen={modalImg}
				onClose={() => {
					setModalImg(false);
				}}
			>
				<p>holaaa</p>
			</Modal>
		</div>
	);
}
