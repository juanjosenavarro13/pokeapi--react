import { useQueryParam } from "../../../shared/hooks/useQuery";
import { useEffect } from "react";

export function usePage() {
	const pageParam = useQueryParam("page");

	useEffect(() => {
		const transformNumberPage = Number(pageParam);
		if (isNaN(transformNumberPage) || transformNumberPage <= 0) {
			removeQueryParam("page");
		}
	}, [pageParam]);

	const transformNumberPage = Number(pageParam);
	if (isNaN(transformNumberPage) || transformNumberPage <= 0) return 1;
	return transformNumberPage;
}

export function removeQueryParam(paramKey: string) {
	const searchParams = new URLSearchParams(window.location.search);
	searchParams.delete(paramKey);
	const newUrl = `${window.location.pathname}${searchParams.toString()}`;
	window.history.replaceState({}, "", newUrl);
}

export function addQueryParam(paramKey: string, paramValue: string) {
	const searchParams = new URLSearchParams(window.location.search);
	searchParams.set(paramKey, paramValue);
	const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
	window.history.replaceState({}, "", newUrl);
}
