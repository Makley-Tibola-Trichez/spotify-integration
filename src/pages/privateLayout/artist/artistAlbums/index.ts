import { artistAlbumsLoader } from "./artistAlbums.loader";
import { ArtistAlbumnsViewModel } from "./artistAlbums.viewmodel";

export const ArtistAlbums = {
	ViewModel: ArtistAlbumnsViewModel,
	loader: artistAlbumsLoader,
} as const;
