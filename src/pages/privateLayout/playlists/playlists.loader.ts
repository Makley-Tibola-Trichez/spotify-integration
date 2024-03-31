import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer } from "react-router-dom";
import type { PromisePlaylistsLoader } from "./playlists.types";

export const playlistsLoader = withLoader((_, queryClient) => {
	const playlistsLoader: PromisePlaylistsLoader = {
		playlistsQuery: queryClient.fetchQuery({
			queryKey: ["playlists"],
			queryFn: () => SpotifyService.listUserPlaylists(),
		}),
	};

	return defer(playlistsLoader);
});
