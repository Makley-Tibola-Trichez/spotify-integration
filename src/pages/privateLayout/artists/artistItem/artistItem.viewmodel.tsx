import type { ItemListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { forwardRef } from "react";
import { ArtistItemView } from "./artistItem.view";
import { useArtistItemModel } from "./useArtistItem.model";

export const ArtistItemViewModel = forwardRef<HTMLLIElement, ItemListUserTopArtistsResponse>((item, ref) => {
	return <ArtistItemView {...useArtistItemModel(item)} ref={ref} />;
});

ArtistItemViewModel.displayName = "ArtistItemViewModel";
