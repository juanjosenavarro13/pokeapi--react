import { usePokemonAbility } from "../../../../../../../../shared/hooks/usePokemonAbility";

export function CardAbility({
	ability,
}: Readonly<{ ability: { name: string; url: string } }>) {
	const { data } = usePokemonAbility(ability.url);
	return <li>{data?.name}</li>;
}
