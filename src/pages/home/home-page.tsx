import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../shared/components/spinner/spinner";
import { getPokemonList } from "../../axios/fetchs/pokemon";
import { PokemonCard } from "./components/pokemon-card";
import styles from "./home-page.module.css";

export function HomePage() {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["PokemonList"],
		queryFn: getPokemonList,
	});
	console.log(data);
	if (isLoading || isError) return <Spinner />;
	return (
		<div className={styles.container}>
			{data?.results.map((Pokemon) => {
				if (!Pokemon) return null;
				return <PokemonCard key={Pokemon?.id} pokemon={Pokemon} />;
			})}
		</div>
	);
}
