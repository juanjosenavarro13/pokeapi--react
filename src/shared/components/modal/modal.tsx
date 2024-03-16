import styles from "./modal.module.css";
interface Props {
	isOpen: boolean;
	onClose: () => void;
	children: JSX.Element;
}
export function Modal({ isOpen, onClose, children }: Readonly<Props>) {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}
