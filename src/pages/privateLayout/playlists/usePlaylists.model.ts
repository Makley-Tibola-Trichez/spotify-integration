import { SpotifyService } from "@/api/spotifyService";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function usePlaylistsModel() {
	const playlistsInfiniteQuery = useInfiniteQuery({
		queryKey: ["playlists"],
		initialPageParam: 0,
		getNextPageParam,
		queryFn: ({ pageParam }) => SpotifyService.listUserPlaylists({ offset: pageParam }),
	});

	const playlistsItems = useMemo(
		() => playlistsInfiniteQuery.data?.pages.flatMap(({ data }) => data.items) ?? [],
		[playlistsInfiniteQuery.data?.pages],
	);

	const { bottomElementRef } = useInfiniteScroll<HTMLLIElement>({
		fetchNextPage: () => void playlistsInfiniteQuery.fetchNextPage(),
		isFetching: playlistsInfiniteQuery.isFetchingNextPage,
	});

	return { playlistsInfiniteQuery, playlistsItems, bottomElementRef };
}
