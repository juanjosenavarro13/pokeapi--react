import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQueryParam(key: string) {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]).get(key);
}
