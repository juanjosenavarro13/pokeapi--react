import styles from "./acordion.module.css";
interface Props {
	label: string;
	children: JSX.Element;
	open?: boolean;
}
export function Acordion({ label, children, open }: Readonly<Props>) {
	return (
		<details className={styles.details} open={open}>
			<summary className={styles.summary}>{label}</summary>
			<main>{children}</main>
		</details>
	);
}
