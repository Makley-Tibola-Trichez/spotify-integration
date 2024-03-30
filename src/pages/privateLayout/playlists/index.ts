import { playlistsLoader } from "./playlists.loader";
import { PlaylistsViewModel } from "./playlists.viewmodel";

export const Playlists = {
	ViewModel: PlaylistsViewModel,
	loader: playlistsLoader,
} as const;
