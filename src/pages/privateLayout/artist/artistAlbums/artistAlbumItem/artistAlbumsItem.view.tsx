import type { ItemListArtistAlbumsResponse } from "@/api/types/listArtistAlbums.types";
import dayjs from "dayjs";
import { forwardRef } from "react";

export const ArtistAlbumItemView = forwardRef<HTMLLIElement, ItemListArtistAlbumsResponse>((item, ref) => {
	return (
		<li className="flex items-center gap-4" key={item.id} ref={ref}>
			<img src={item.images[1].url} className="h-20 w-20 rounded" alt={item.name} />
			<div>
				<div className="text-sm">{item.name}</div>
				<div className="text-muted-foreground text-xs">{dayjs(item.release_date).format("DD/MM/YYYY")}</div>
			</div>
		</li>
	);
});

ArtistAlbumItemView.displayName = "ArtistAlbumItemView";
