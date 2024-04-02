import { NoResults } from "@/components/noResults/noResults";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArtistAlbumItemView } from "./artistAlbumItem/artistAlbumsItem.view";
import { ArtistAlbumsItemsSkeleton } from "./artistAlbums.skeleton";
import type { useArtistAlbumsModel } from "./useArtistAlbums.model";

export function ArtistAlbumsView({
	artistAlbumsInfiniteQuery,
	artistAlbumsItems,
	bottomElementRef,
}: ReturnType<typeof useArtistAlbumsModel>) {
	return (
		<ScrollArea className="max-h-[calc(100dvh-15rem)] md:max-h-[calc(100dvh-12rem)]">
			<ul className="grid gap-x-2 gap-y-4 lg:grid-cols-2">
				<NoResults
					visible={artistAlbumsItems.length === 0}
					title="Nenhum album encontrado!"
					description="Parece que esse artista ainda não lançou nenhum album."
				/>
				{artistAlbumsItems.map((i, idx) => (
					<ArtistAlbumItemView
						{...i}
						key={i.id}
						ref={idx + 1 === artistAlbumsItems.length ? bottomElementRef : undefined}
					/>
				))}
				<ArtistAlbumsItemsSkeleton visible={artistAlbumsInfiniteQuery.isFetching} />
			</ul>
		</ScrollArea>
	);
}
