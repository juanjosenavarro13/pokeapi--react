import { Acordion } from "../../../../../../shared/components/acordion/acordion";
import { PokemonSprites } from "../../../../../../shared/fetchs/pokemon";
import styles from "./acordion-img.module.css";
export function AcordionImg({
	sprites,
}: Readonly<{ sprites: PokemonSprites }>) {
	return (
		<Acordion label="Imagenes">
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
		</Acordion>
	);
}
