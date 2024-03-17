import { Modal } from "../../../../shared/components/modal/modal";
import { PokemonSprites } from "../../../../shared/fetchs/pokemon";
import styles from "./moda-img.module.css";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	sprites: PokemonSprites;
}
export function ModalImg({ isOpen, onClose, sprites }: Readonly<Props>) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.container}>
				<img
					src={sprites.front_default ?? "/images/shadow-pokemon.webp"}
					alt={sprites.front_default ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.back_default ?? "/images/shadow-pokemon.webp"}
					alt={sprites.back_default ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.front_female ?? "/images/shadow-pokemon.webp"}
					alt={sprites.front_female ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.back_female ?? "/images/shadow-pokemon.webp"}
					alt={sprites.back_female ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.front_shiny ?? "/images/shadow-pokemon.webp"}
					alt={sprites.front_shiny ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.back_shiny ?? "/images/shadow-pokemon.webp"}
					alt={sprites.back_shiny ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.front_shiny_female ?? "/images/shadow-pokemon.webp"}
					alt={sprites.front_shiny_female ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
				<img
					src={sprites.back_shiny_female ?? "/images/shadow-pokemon.webp"}
					alt={sprites.back_shiny_female ?? "/images/shadow-pokemon.webp"}
					loading="lazy"
				/>
			</div>
		</Modal>
	);
}
