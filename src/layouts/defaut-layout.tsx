import { Link, Outlet } from "react-router-dom";
import styles from "./default-loyout.module.css";

export function DefaultLayout() {
	return (
		<main className={styles.main}>
			<Link to={"/"}>
				<img
					className={styles.logo}
					src="/favicon.webp"
					alt="logo pokeapi"
					loading="lazy"
				/>
			</Link>
			<div className={styles.container}>
				<Outlet />
			</div>
		</main>
	);
}
