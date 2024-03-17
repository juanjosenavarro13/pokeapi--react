import { Button } from "../button/button";

export function BackButton() {
	return <Button label="Volver Atrás" onClick={() => window.history.back()} />;
}
