import { useQuery } from "@tanstack/react-query";
import { getPokemonAbility } from "../fetchs/pokemon";

export function usePokemonAbility(url: string) {
	return useQuery({
		queryKey: ["PokemonAbility", url],
		queryFn: () => getPokemonAbility(url),
		staleTime: Infinity,
	});
}
