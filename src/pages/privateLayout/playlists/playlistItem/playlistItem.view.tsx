import type { ItemListUserPLaylistsResponse } from "@/api/types/listUserPlaylists.types";

export const PlaylistItemView = (item: ItemListUserPLaylistsResponse) => {
	return (
		<div className="flex items-center gap-4 text-white" key={item.name}>
			<img src={item.images[0].url} alt={item.name} height={"72px"} width={"72px"} />
			<div>
				<div className="text-sm">{item.name}</div>
				<div className="text-xs">{item.owner.display_name}</div>
			</div>
		</div>
	);
};
