import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../fetchs/pokemon";

export function usePokemonDetail(url: string) {
	return useQuery({
		queryKey: ["PokemonDetail", url],
		queryFn: () => getPokemonDetail(url),
		staleTime: Infinity,
	});
}
