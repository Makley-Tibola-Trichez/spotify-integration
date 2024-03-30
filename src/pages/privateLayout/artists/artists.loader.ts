import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer } from "react-router-dom";
import type { PromiseArtistsLoader } from "./artists.types";

export const artistsLoader = withLoader((_, queryClient) => {
	const artistsLoader: PromiseArtistsLoader = {
		artistsQuery: queryClient.fetchQuery({
			queryKey: ["artists"],
			queryFn: () => SpotifyService.listUserTopArtists(),
		}),
	};

	return defer(artistsLoader);
});
