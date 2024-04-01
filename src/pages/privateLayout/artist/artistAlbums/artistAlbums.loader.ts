import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { defer, redirect } from "react-router-dom";
import type { PromiseArtistAlbumsLoader } from "./artistAlbums.types";

export const artistAlbumsLoader = withLoader(({ params }, queryClient) => {
	const { artistId } = params;

	if (!artistId) {
		return redirect("/artists");
	}

	const artistAlbumsLoader: PromiseArtistAlbumsLoader = {
		artistAlbumsQuery: queryClient.fetchInfiniteQuery({
			queryKey: ["artist", "albums", artistId],
			initialPageParam: 0,
			getNextPageParam,
			queryFn: ({ pageParam }) => SpotifyService.listArtistAlbums(artistId, { offset: pageParam }),
		}),
	};

	return defer(artistAlbumsLoader);
});
