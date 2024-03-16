import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../axios/fetchs/pokemon";
import { Spinner } from "../../shared/components/spinner/spinner";

export function HomePage() {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["pokemons"],
		queryFn: getPokemons,
	});
	console.log(data);
	if (isError) return null;
	if (isLoading) return <Spinner />;
	return (
		<div>
			{data?.data.results.map((pokemon) => (
				<p key={pokemon.url}>{pokemon.name}</p>
			))}
		</div>
	);
}
