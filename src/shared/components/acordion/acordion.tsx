import styles from "./acordion.module.css";
interface Props {
	label: string;
	children: JSX.Element;
}
export function Acordion({ label, children }: Readonly<Props>) {
	return (
		<details className={styles.details}>
			<summary className={styles.summary}>{label}</summary>
			<main>{children}</main>
		</details>
	);
}
