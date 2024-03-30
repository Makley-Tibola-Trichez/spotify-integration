import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { type LoaderFunction, redirect } from "react-router-dom";

export const playlistsLoader = withLoader((_, queryClient) => {
	// queryClient.prefetchQuery({
	// 	queryKey: ["playlists"],
	// 	queryFn: () => SpotifyService.listUserPlaylists(),
	// 	staleTime: 1000 * 60 * 60,
	// 	gcTime: 1000 * 60 * 60,
	// });
	return null;
});
