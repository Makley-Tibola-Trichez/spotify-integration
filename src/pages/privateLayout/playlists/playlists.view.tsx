import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { PageHeader } from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaylistItemView } from "./playlistItem/playlistItem.view";
import type { usePlaylistsModel } from "./usePlaylists.model";

export function PlaylistsView({ playlistsSuspenseQuery }: ReturnType<typeof usePlaylistsModel>) {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Minhas Playlists</PageHeader.Title>
					<PageHeader.Description>Sua coleção pessoal de playlists</PageHeader.Description>
				</div>
				<Dialog.Root>
					<Dialog.Trigger>
						<PageHeader.ActionButton>Criar playlist</PageHeader.ActionButton>
					</Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Title>Nova playlist</Dialog.Title>
						<Label htmlFor="playlistName">Dê um nome a sua playlist</Label>
						<Input id="playlistName" />
						<div className="flex justify-center">
							<Button className="w-28">Salvar</Button>
						</div>
					</Dialog.Content>
				</Dialog.Root>
			</PageHeader.Root>
			<div className="flex flex-col gap-4">{playlistsSuspenseQuery.data?.data.items.map(PlaylistItemView)}</div>
		</ContentLayout>
	);
}
