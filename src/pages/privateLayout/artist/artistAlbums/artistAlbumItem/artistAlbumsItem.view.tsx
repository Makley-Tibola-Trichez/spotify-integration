import type { ItemListArtistAlbumsResponse } from "@/api/types/listArtistAlbums.types";
import dayjs from "dayjs";

export function ArtistAlbumItemView(item: ItemListArtistAlbumsResponse) {
	return (
		<div className="flex items-center gap-4" key={item.id}>
			<img src={item.images[1].url} className="h-20 w-20 rounded" alt={item.name} />
			<div>
				<div className="text-sm">{item.name}</div>
				<div className="text-muted-foreground text-xs">{dayjs(item.release_date).format("DD/MM/YYYY")}</div>
			</div>
		</div>
	);
}
