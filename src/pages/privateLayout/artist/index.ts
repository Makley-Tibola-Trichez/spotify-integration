import { artistLoader } from "./artist.loader";
import { ArtistViewModel } from "./artist.viewmodel";

export const Artist = {
	ViewModel: ArtistViewModel,
	loader: artistLoader,
} as const;
