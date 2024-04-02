import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import type { SideBarButtonProps } from "../sideBar/sideBarButton.types";

export const BottomBarButton = (props: SideBarButtonProps) => {
	return (
		<NavLink
			className={({ isActive }) =>
				cn(
					"flex flex-1 flex-col items-center gap-3 rounded-lg px-3 py-2 text-xs transition-all hover:bg-white/10",
					isActive ? "text-foreground" : "text-muted-foreground",
				)
			}
			to={props.to}
		>
			{props.children}
		</NavLink>
	);
};
