import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "../../shared/components/spinner/spinner";
import { LIMIT, getPokemonList } from "../../shared/fetchs/pokemon";
import { Paginate } from "./components/paginate/paginate";
import { PokemonCard } from "./components/pokemon-card/pokemon-card";
import styles from "./home-page.module.css";
import { addQueryParam, usePage } from "./utils/usePage";

export function HomePage() {
	const [page, setPage] = useState<number>(usePage());

	const { data, isError, isLoading } = useQuery({
		queryKey: ["PokemonList", page],
		queryFn: () => getPokemonList(page),
		staleTime: Infinity,
	});
	if (isLoading || isError) return <Spinner />;

	if (data?.data.results.length === 0) {
		setPage(() => {
			const newPage = Math.ceil(data.data.count / LIMIT);
			addQueryParam("page", newPage.toString());
			return newPage;
		});
	}

	return (
		<>
			{data && (
				<Paginate
					actualPage={page}
					next={data?.data.next}
					previous={data?.data.previous}
					nextPage={() => {
						setPage((prev) => {
							const newPage = prev + 1;
							addQueryParam("page", newPage.toString());
							return newPage;
						});
					}}
					previousPage={() => {
						setPage((prev) => {
							const newPage = prev - 1;
							addQueryParam("page", newPage.toString());
							return newPage;
						});
					}}
				/>
			)}
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
						setPage((prev) => {
							const newPage = prev + 1;
							addQueryParam("page", newPage.toString());
							return newPage;
						});
					}}
					previousPage={() => {
						setPage((prev) => {
							const newPage = prev - 1;
							addQueryParam("page", newPage.toString());
							return newPage;
						});
					}}
				/>
			)}
		</>
	);
}
