import styles from "./spinner.module.css";
export function Spinner() {
	return (
		<div className={styles.container}>
			<span className={styles.loader}></span>
		</div>
	);
}
