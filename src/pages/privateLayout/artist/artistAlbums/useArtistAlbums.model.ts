import { SpotifyService } from "@/api/spotifyService";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getNextPageParam } from "@/utils/getNextPageParam";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export function useArtistAlbumsModel() {
	const { artistId } = useParams<{ artistId: string }>();

	if (!artistId) {
		throw new Error("Artist ID is required");
	}

	const artistAlbumsInfiniteQuery = useInfiniteQuery({
		queryKey: ["artist", "albums", artistId],
		initialPageParam: 0,
		getNextPageParam,
		queryFn: ({ pageParam }) => SpotifyService.listArtistAlbums(artistId, { offset: pageParam }),
	});

	const artistAlbumsItems = useMemo(
		() => artistAlbumsInfiniteQuery.data?.pages.flatMap(({ data }) => data.items) ?? [],
		[artistAlbumsInfiniteQuery.data?.pages],
	);

	const { bottomElementRef } = useInfiniteScroll<HTMLLIElement>({
		fetchNextPage: () => void artistAlbumsInfiniteQuery.fetchNextPage(),
		isFetching: artistAlbumsInfiniteQuery.isFetchingNextPage,
	});

	return { artistAlbumsInfiniteQuery, artistAlbumsItems, bottomElementRef };
}
