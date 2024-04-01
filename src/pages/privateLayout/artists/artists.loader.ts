import { SpotifyService } from "@/api/spotifyService";
import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { withLoader } from "@/hofs/withLoader";
import { getNextPageParam } from "@/utils/getNextPageParam";
import type { AxiosResponse } from "axios";
import { defer } from "react-router-dom";
import type { PromiseArtistsLoader } from "./artists.types";

export const artistsLoader = withLoader((_, queryClient) => {
	const artistsLoader: PromiseArtistsLoader = {
		artistsQuery: queryClient.fetchInfiniteQuery({
			queryKey: ["artists"],
			initialPageParam: 0,
			getNextPageParam,
			queryFn: ({ pageParam }) => SpotifyService.listUserTopArtists({ offset: pageParam }),
		}),
	};

	return defer(artistsLoader);
});
