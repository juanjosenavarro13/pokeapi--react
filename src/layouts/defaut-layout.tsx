import { Outlet } from "react-router-dom";
import styles from "./default-loyout.module.css";

export function DefaultLayout() {
	const urlGithub = "https://github.com/juanjosenavarro13/pokeapi--react";
	return (
		<main className={styles.main}>
			<img
				className={styles.logo}
				src="/favicon.webp"
				alt="logo pokeapi"
				loading="lazy"
			/>
			<div className={styles.container}>
				<Outlet />
			</div>
			<footer>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<a href={urlGithub} style={{ color: "white" }}>
						Todos los derechos reservados ~ Juan José Navarro
					</a>
				</div>
			</footer>
		</main>
	);
}
