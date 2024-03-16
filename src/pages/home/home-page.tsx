import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../../shared/fetchs/pokemon";
import { Spinner } from "../../shared/components/spinner/spinner";
import styles from "./home-page.module.css";
import { PokemonCard } from "./components/pokemon-card";

export function HomePage() {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["PokemonList"],
		queryFn: getPokemonList,
	});
	console.log(data);
	if (isLoading || isError) return <Spinner />;
	return (
		<div className={styles.container}>
			{data?.data.results.map((Pokemon) => (
				<PokemonCard key={Pokemon.url} url={Pokemon.url} />
			))}
		</div>
	);
}
