import { artistAlbumsLoader } from "./artistAlbums.loader";
import { ArtistAlbumsViewModel } from "./artistAlbums.viewmodel";

export const ArtistAlbums = {
	ViewModel: ArtistAlbumsViewModel,
	loader: artistAlbumsLoader,
} as const;
