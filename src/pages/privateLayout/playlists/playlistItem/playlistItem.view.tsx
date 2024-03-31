import type { ItemListUserPLaylistsResponse } from "@/api/types/listUserPlaylists.types";

export const PlaylistItemView = (item: ItemListUserPLaylistsResponse) => {
	return (
		<div className="flex items-center gap-4 text-white" key={item.name}>
			<img src={item.images[0].url} alt={item.name} className="h-[72px] w-[72px] rounded" />
			<div>
				<div className="mb-1 text-sm">{item.name}</div>
				<div className="text-xs">{item.owner.display_name}</div>
			</div>
		</div>
	);
};
