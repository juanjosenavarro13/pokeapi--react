import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../shared/components/spinner/spinner";
import { getPokemonsList } from "../../axios/fetchs/pokemon";

export function HomePage() {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["pokemons"],
		queryFn: getPokemonsList,
	});
	console.log(data);
	if (isLoading || isError) return <Spinner />;
	return (
		<div>
			{data?.result.map((Pokemon) => <p key={Pokemon.id}>{Pokemon.name}</p>)}
		</div>
	);
}
