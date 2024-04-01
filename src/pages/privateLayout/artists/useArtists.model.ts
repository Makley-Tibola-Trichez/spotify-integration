import { SpotifyService } from "@/api/spotifyService";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function useArtistsModel() {
	const artistsInfiniteQuery = useInfiniteQuery({
		queryKey: ["artists"],
		initialPageParam: 0,
		getNextPageParam,
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
