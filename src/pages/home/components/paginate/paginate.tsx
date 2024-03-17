import { Button } from "../../../../shared/components/button/button";
import { MoveScrollTop } from "../../../../shared/utils/scrollTop";
import styles from "./paginate.module.css";
interface Props {
	actualPage: number;
	next: string | null;
	previous: string | null;
	nextPage: () => void;
	previousPage: () => void;
}
export function Paginate({
	actualPage,
	nextPage,
	previousPage,
	next,
	previous,
}: Readonly<Props>) {
	return (
		<nav className={styles.nav}>
			<Button
				label="Anterior"
				onClick={() => {
					MoveScrollTop();
					previousPage();
				}}
				disabled={Boolean(!previous)}
			/>
			<Button label={actualPage} />
			<Button
				label="Siguiente"
				onClick={() => {
					MoveScrollTop();
					nextPage();
				}}
				disabled={Boolean(!next)}
			/>
		</nav>
	);
}
