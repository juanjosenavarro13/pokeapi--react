import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../../axios/fetchs/pokemon";

export function usePokemonDetail(url: string) {
	return useQuery({
		queryKey: ["PokemonDetail", url],
		queryFn: () => getPokemonDetail(url),
	});
}
