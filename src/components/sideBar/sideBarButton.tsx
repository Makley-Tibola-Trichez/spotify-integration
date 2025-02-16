import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import type { SideBarButtonProps } from "./sideBarButton.types";

export function SideBarButton(props: SideBarButtonProps) {
	return (
		<NavLink
			className={({ isActive }) =>
				cn(
					"flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10",
					isActive ? "text-foreground" : "text-muted-foreground",
				)
			}
			to={props.to}
		>
			{props.children}
		</NavLink>
	);
}
