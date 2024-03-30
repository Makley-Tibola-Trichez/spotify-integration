import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer, redirect } from "react-router-dom";
import type { PromiseArtistLoader } from "./artist.types";

export const artistLoader = withLoader(async ({ params }, queryClient) => {
	const { artistId } = params;

	if (!artistId) {
		return redirect("/artists");
	}

	const artistLoader: PromiseArtistLoader = {
		artistQuery: queryClient.fetchQuery({
			queryKey: ["artist", artistId],
			queryFn: () => SpotifyService.getArtist(artistId),
			staleTime: Number.POSITIVE_INFINITY,
		}),
	};

	return defer(artistLoader);
});
