import type { ItemListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { ArtistItemView } from "./artistItem.view";
import { useArtistItemModel } from "./useArtistItem.model";

export function ArtistItemViewModel(item: ItemListUserTopArtistsResponse) {
	return <ArtistItemView {...useArtistItemModel(item)} />;
}
