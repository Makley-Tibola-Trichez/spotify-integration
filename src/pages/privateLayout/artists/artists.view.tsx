import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { PageHeader } from "@/components/pageHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArtistItemViewModel } from "./artistItem/artistItem.viewmodel";
import type { useArtistsModel } from "./useArtists.model";

export function ArtistsView({ artistsQuery }: ReturnType<typeof useArtistsModel>) {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Top Artistas</PageHeader.Title>
					<PageHeader.Description>Aqui você encontra seus artistas preferidos</PageHeader.Description>
				</div>
			</PageHeader.Root>
			<ScrollArea className="max-h-[calc(100dvh-12rem)]">
				{/* {artistsQuery.isFetching ? <ArtistSkeleton /> : null} */}
				<ul className="grid gap-x-2 gap-y-2 lg:grid-cols-3 sm:grid-cols-2">
					{artistsQuery?.data?.items.map((i) => (
						<ArtistItemViewModel key={i.name} {...i} />
					))}
				</ul>
			</ScrollArea>
		</ContentLayout>
	);
}
