import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer, redirect } from "react-router-dom";
import type { PromiseArtistAlbumsLoader } from "./artistAlbums.types";

export const artistAlbumsLoader = withLoader(({ params }, queryClient) => {
	const { artistId } = params;

	if (!artistId) {
		return redirect("/artists");
	}

	const artistAlbumsLoader: PromiseArtistAlbumsLoader = {
		artistAlbumsQuery: queryClient.fetchQuery({
			queryKey: ["artist", "albums", artistId],
			queryFn: () => SpotifyService.listArtistAlbums(artistId),
		}),
	};

	return defer(artistAlbumsLoader);
});
