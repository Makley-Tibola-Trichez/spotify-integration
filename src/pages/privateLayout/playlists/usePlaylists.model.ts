import { SpotifyService } from "@/api/spotifyService";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

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

	const _navigate = useNavigate();

	const handleCriarPlaylist = () => _navigate("./criar-playlist");

	return { playlistsInfiniteQuery, playlistsItems, bottomElementRef, handleCriarPlaylist };
}
