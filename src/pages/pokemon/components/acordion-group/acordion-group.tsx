import { Acordion } from "../../../../shared/components/acordion/acordion";
import styles from "./acordion-group.module.css";
export function AcordionGroup() {
	return (
		<div className={styles.container}>
			<Acordion />
			<Acordion />
			<Acordion />
		</div>
	);
}
