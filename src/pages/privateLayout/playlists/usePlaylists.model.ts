import type { PlaylistsLoader } from "./playlists.types";

export function usePlaylistsModel(props: PlaylistsLoader) {
	return { ...props };
}
