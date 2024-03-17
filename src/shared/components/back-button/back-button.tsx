import { Button } from "../button/button";

export function BackButton() {
	return (
		<Button
			label="Volver Atrás"
			cursor="pointer"
			onClick={() => window.history.back()}
		/>
	);
}
