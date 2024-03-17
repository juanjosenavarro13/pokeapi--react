import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../../shared/fetchs/pokemon";
import { Spinner } from "../../shared/components/spinner/spinner";
import styles from "./home-page.module.css";
import { PokemonCard } from "./components/pokemon-card/pokemon-card";
import { Paginate } from "./components/paginate/paginate";
import { useState } from "react";

export function HomePage() {
	const [page, setPage] = useState<number>(1);
	const { data, isError, isLoading } = useQuery({
		queryKey: ["PokemonList", page],
		queryFn: () => getPokemonList(page),
		staleTime: Infinity,
	});
	if (isLoading || isError) return <Spinner />;
	return (
		<>
			<div className={styles.container}>
				{data?.data.results.map((Pokemon) => (
					<PokemonCard key={Pokemon.url} url={Pokemon.url} />
				))}
			</div>
			{data && (
				<Paginate
					actualPage={page}
					next={data?.data.next}
					previous={data?.data.previous}
					nextPage={() => {
						setPage((prev) => prev + 1);
					}}
					previousPage={() => {
						setPage((prev) => prev - 1);
					}}
				/>
			)}
		</>
	);
}
