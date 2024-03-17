import styles from "./button.module.css";
interface Props {
	label: string | number;
	onClick?: () => void;
	disabled?: boolean;
}
export function Button({ label, onClick, disabled }: Readonly<Props>) {
	return (
		<button className={styles.button} disabled={disabled} onClick={onClick}>
			{label}
		</button>
	);
}
