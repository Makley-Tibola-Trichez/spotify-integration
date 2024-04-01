import { SpotifyService } from "@/api/spotifyService";
import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { withLoader } from "@/hofs/withLoader";
import type { AxiosResponse } from "axios";
import { defer } from "react-router-dom";
import type { PromiseArtistsLoader } from "./artists.types";

export const artistsLoader = withLoader((_, queryClient) => {
	const artistsLoader: PromiseArtistsLoader = {
		artistsQuery: queryClient.fetchInfiniteQuery({
			queryKey: ["artists"],
			initialPageParam: 0,
			getNextPageParam(lastPage: AxiosResponse<ListUserTopArtistsResponse>) {
				if (lastPage.data.next !== null) {
					return lastPage.data.offset + lastPage.data.limit;
				}
			},
			queryFn: ({ pageParam }) => SpotifyService.listUserTopArtists({ offset: pageParam }),
		}),
	};

	return defer(artistsLoader);
});
