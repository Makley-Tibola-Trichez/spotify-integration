import { SpotifyService } from "@/api/spotifyService";
import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useMemo } from "react";

export function useArtistsModel() {
	const artistsInfiniteQuery = useInfiniteQuery({
		queryKey: ["artists"],
		initialPageParam: 0,
		getNextPageParam(lastPage: AxiosResponse<ListUserTopArtistsResponse>) {
			if (lastPage.data.next !== null) {
				return lastPage.data.offset + lastPage.data.limit;
			}
		},
		queryFn: ({ pageParam }) => SpotifyService.listUserTopArtists({ offset: pageParam }),
	});

	const artistsItems = useMemo(
		() => artistsInfiniteQuery.data?.pages.flatMap(({ data }) => data.items) ?? [],
		[artistsInfiniteQuery.data?.pages],
	);

	const { bottomElementRef } = useInfiniteScroll<HTMLLIElement>({
		fetchNextPage: () => void artistsInfiniteQuery.fetchNextPage(),
		isFetching: artistsInfiniteQuery.isFetchingNextPage,
	});

	return { artistsInfiniteQuery, artistsItems, bottomElementRef };
}
