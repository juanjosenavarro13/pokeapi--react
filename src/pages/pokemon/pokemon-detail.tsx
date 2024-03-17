import { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { NamePokemonColor } from "../../shared/components/name-pokemon-color/name-pokemon-color";
import { Spinner } from "../../shared/components/spinner/spinner";
import { HTTP_ENDPOINTS } from "../../shared/constants/http-endpoints";
import { usePokemonDetail } from "../../shared/hooks/usePokemonDetail";
import { ModalImg } from "./components/modal-img/modal-img";
import styles from "./pokemon-detail.module.css";
import { AcordionGroup } from "./components/acordion-group/acordion-group";

export function PokemonDetailPage() {
	const params = useParams();
	const url = HTTP_ENDPOINTS.Pokemon + "/" + params.id + "/";
	const { data, isError, isLoading } = usePokemonDetail(url);
	const [modalImg, setModalImg] = useState<boolean>(false);

	if (isError) redirect("/");
	if (isLoading || !data) return <Spinner />;

	return (
		<div className={styles.container}>
			<div className={styles.containerImg}>
				<button
					onClick={() => {
						setModalImg(true);
					}}
				>
					<img
						src={data?.sprites.front_default}
						alt={`pokemon ${data?.name}`}
						loading="lazy"
					/>
				</button>
				<NamePokemonColor name={data.name} types={data.types} />
			</div>
			<div className={styles.acordionSection}>
				<AcordionGroup pokemon={data} />
			</div>
			<ModalImg
				isOpen={modalImg}
				onClose={() => {
					setModalImg(false);
				}}
				sprites={data.sprites}
			></ModalImg>
		</div>
	);
}
