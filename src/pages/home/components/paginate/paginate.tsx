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
			<button
				disabled={Boolean(!previous)}
				onClick={() => {
					MoveScrollTop();
					previousPage();
				}}
			>
				Anterior
			</button>

			<button>{actualPage}</button>

			<button
				disabled={Boolean(!next)}
				onClick={() => {
					MoveScrollTop();
					nextPage();
				}}
			>
				Siguiente
			</button>
		</nav>
	);
}
