import { useParams } from "react-router-dom";
import { usePokemonDetail } from "../../shared/hooks/usePokemonDetail";
import { HTTP_ENDPOINTS } from "../../shared/constants/http-endpoints";

export function PokemonDetailPage() {
	const params = useParams();
	const url = HTTP_ENDPOINTS.Pokemon + "/" + params.id + "/";
	const { data } = usePokemonDetail(url);
	console.log(data);
	return (
		<div>
			<img src={data?.sprites.front_default} alt={`pokemon ${data?.name}`} />
		</div>
	);
}
