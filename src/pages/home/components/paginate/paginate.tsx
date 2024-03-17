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
			<ul>
				<li>
					<button
						disabled={Boolean(!previous)}
						onClick={() => {
							previousPage();
						}}
					>
						Anterior
					</button>
				</li>
				<li>
					<button>{actualPage}</button>
				</li>
				<li>
					<button
						disabled={Boolean(!next)}
						onClick={() => {
							nextPage();
						}}
					>
						Siguiente
					</button>
				</li>
			</ul>
		</nav>
	);
}
