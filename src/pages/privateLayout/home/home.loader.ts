import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer } from "react-router-dom";
import type { PromiseLoaderHome } from "./home.types";

export const homeLoader = withLoader((_, queryClient) => {
	const last5PlayedTracks: PromiseLoaderHome = {
		last5PlayedTracksQuery: queryClient.fetchQuery({
			queryKey: ["last5PlayedTracks"],
			queryFn: SpotifyService.getLast5PlayedTracks,
		}),
	};

	return defer(last5PlayedTracks);
});
