import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { NoResults } from "@/components/noResults/noResults";
import { PageHeader } from "@/components/pageHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaylistItemView } from "./playlistItem/playlistItem.view";
import { PlaylistsItemsSkeleton } from "./playlists.skeleton";
import type { usePlaylistsModel } from "./usePlaylists.model";

export function PlaylistsView({
	playlistsItems,
	bottomElementRef,
	playlistsInfiniteQuery,
	handleCriarPlaylist,
}: ReturnType<typeof usePlaylistsModel>) {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Minhas Playlists</PageHeader.Title>
					<PageHeader.Description>Sua coleção pessoal de playlists</PageHeader.Description>
				</div>
				<PageHeader.ActionButton onClick={handleCriarPlaylist}>Criar playlist</PageHeader.ActionButton>
			</PageHeader.Root>
			<ScrollArea className="max-h-[calc(100dvh-12rem)]">
				<ul className="flex flex-col gap-4">
					<NoResults
						visible={playlistsItems.length === 0}
						title="Nenhuma playlist encontrada!"
						description="Crie uma nova playlist para visulizá-la"
					/>
					{playlistsItems.map((item, idx) => (
						<PlaylistItemView
							{...item}
							key={item.id}
							ref={idx === playlistsItems.length - 1 ? bottomElementRef : undefined}
						/>
					))}
					<PlaylistsItemsSkeleton visible={playlistsInfiniteQuery.isFetchingNextPage} />
				</ul>
			</ScrollArea>
		</ContentLayout>
	);
}
