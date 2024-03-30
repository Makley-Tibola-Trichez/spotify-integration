import { artistsLoader } from "./artists.loader";
import { ArtistsViewModel } from "./artists.viewmodel";

export const Artists = {
	ViewModel: ArtistsViewModel,
	loader: artistsLoader,
} as const;
