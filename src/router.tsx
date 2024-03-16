import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, PokemonDetailPage } from "./pages";
import { DefaultLayout } from "./layouts/defaut-layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/pokemon", element: <PokemonDetailPage /> },
		],
	},
]);
