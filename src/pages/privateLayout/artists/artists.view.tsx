import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { NoResults } from "@/components/noResults/noResults";
import { PageHeader } from "@/components/pageHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArtistItemViewModel } from "./artistItem/artistItem.viewmodel";
import { ArtistsItemsSkeleton } from "./artists.skeleton";
import type { useArtistsModel } from "./useArtists.model";

export function ArtistsView({
	artistsItems,
	artistsInfiniteQuery,
	bottomElementRef,
}: ReturnType<typeof useArtistsModel>) {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Top Artistas</PageHeader.Title>
					<PageHeader.Description>Aqui você encontra seus artistas preferidos</PageHeader.Description>
				</div>
			</PageHeader.Root>
			<ScrollArea className="max-h-[calc(100dvh-14rem)] md:max-h-[calc(100dvh-12rem)]">
				<ul className="grid gap-x-2 gap-y-2 lg:grid-cols-2">
					<NoResults
						visible={artistsItems.length === 0}
						title="Nenhum artista encontrado!"
						description="Parece que você não possui artistas pra serem exibidos"
					/>

					{artistsItems.map((item, idx) => (
						<ArtistItemViewModel
							{...item}
							key={item.name}
							ref={idx + 1 === artistsItems.length ? bottomElementRef : undefined}
						/>
					))}

					<ArtistsItemsSkeleton visible={artistsInfiniteQuery.isFetching} />
				</ul>
			</ScrollArea>
		</ContentLayout>
	);
}
