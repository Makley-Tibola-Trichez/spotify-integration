import NoResultsSVG from "@/assets/no-results.svg";
import type { ReactNode } from "react";

type NoResultsProps = {
	visible: boolean;
	title: ReactNode;
	description?: ReactNode;
};

export function NoResults({ title, description, visible }: NoResultsProps) {
	if (!visible) {
		return null;
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<img src={NoResultsSVG} alt="Sem resultados" />
			<span className="text-xl">{title}</span>
			<span className="text-md text-muted-foreground">{description}</span>
		</div>
	);
}
