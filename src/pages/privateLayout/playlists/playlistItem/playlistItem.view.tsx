import type { ItemListUserPLaylistsResponse } from "@/api/types/listUserPlaylists.types";
import { Avatar } from "@/components/ui/avatar";
import { forwardRef } from "react";

export const PlaylistItemView = forwardRef<HTMLLIElement, ItemListUserPLaylistsResponse>((item, ref) => {
	return (
		<li className="flex items-center gap-4 text-white" key={item.name} ref={ref}>
			<Avatar.Root className="h-[72px] w-[72px] rounded">
				<Avatar.Image src={item.images?.[0].url} />
				<Avatar.Fallback className="rounded uppercase">{item.name.slice(0, 2)}</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<div className="mb-1 text-sm">{item.name}</div>
				<div className="text-xs">{item.owner.display_name}</div>
			</div>
		</li>
	);
});

PlaylistItemView.displayName = "PlaylistItemView";
