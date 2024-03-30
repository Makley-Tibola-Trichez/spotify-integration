import clsx from "clsx";
import { Link, useMatch } from "react-router-dom";
import type { SideBarButtonProps } from "./sideBarButton.types";

export function SideBarButton(props: SideBarButtonProps) {
	const _matchRoute = useMatch(`${props.to}/*`);

	return (
		<Link
			className={clsx(
				"flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10",
				_matchRoute !== null ? "text-foreground" : "text-muted-foreground",
			)}
			to={props.to}
		>
			{props.children}
		</Link>
	);
}
