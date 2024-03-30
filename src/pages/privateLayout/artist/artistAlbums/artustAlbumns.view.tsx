import { ArtistAlbumItemView } from "./artistAlbumItem/artistAlbumsItem.view";
import type { ArtistAlbumsLoader } from "./artistAlbums.types";

export function ArtistAlbumsView(props: ArtistAlbumsLoader) {
	return props.artistAlbumsQuery.data?.items.map(ArtistAlbumItemView);
}
