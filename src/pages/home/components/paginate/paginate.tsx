interface Props {
	next: string | null;
	previous: string | null;
	nextPage: () => void;
	previousPage: () => void;
}
export function Paginate({
	nextPage,
	previousPage,
	next,
	previous,
}: Readonly<Props>) {
	return (
		<nav>
			<ul>
				{previous && (
					<li>
						<button
							onClick={() => {
								previousPage();
							}}
						>
							Anterior
						</button>
					</li>
				)}
				<li>Actual</li>
				{next && (
					<li>
						<button
							onClick={() => {
								nextPage();
							}}
						>
							Siguiente
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
}
