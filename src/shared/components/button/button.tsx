import styles from "./button.module.css";
interface Props {
	label: string | number;
	onClick?: () => void;
	disabled?: boolean;
	cursor?: "pointer" | "auto" | "no-drop";
}
export function Button({
	label,
	onClick,
	disabled,
	cursor = "auto",
}: Readonly<Props>) {
	return (
		<button
			style={{ cursor: cursor }}
			className={styles.button}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</button>
	);
}
