import { Outlet } from "react-router-dom";
import styles from "./default-loyout.module.css";

export function DefaultLayout() {
	return (
		<main className={styles.main}>
			<img className={styles.logo} src="./favicon.webp" alt="logo pokeapi" />
			<div className={styles.container}>
				<Outlet />
			</div>
		</main>
	);
}
