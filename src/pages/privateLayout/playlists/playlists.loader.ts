import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { defer } from "react-router-dom";
import type { PromisePlaylistsLoader } from "./playlists.types";

export const playlistsLoader = withLoader((_, queryClient) => {
	const playlistsLoader: PromisePlaylistsLoader = {
		playlistsQuery: queryClient.fetchInfiniteQuery({
			queryKey: ["playlists"],
			initialPageParam: 0,
			getNextPageParam,
			queryFn: ({ pageParam }) => SpotifyService.listUserPlaylists({ offset: pageParam }),
		}),
	};

	return defer(playlistsLoader);
});
