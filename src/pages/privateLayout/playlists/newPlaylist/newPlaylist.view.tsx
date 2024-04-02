import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "react-router-dom";
import type { useNewPlaylistModel } from "./useNewPlaylist.model";

export const NewPlaylistView = ({
	handleValidateInput,
	handleCloseDialog,
	handleInputChange,
}: ReturnType<typeof useNewPlaylistModel>) => {
	return (
		<Dialog.Root open onOpenChange={handleCloseDialog}>
			<Form method="POST" action="/playlists">
				<Dialog.Content>
					<Dialog.Title>Nova playlist</Dialog.Title>
					<Label htmlFor="playlistName">Dê um nome a sua playlist</Label>
					<Input required id="playlistName" onChange={handleInputChange} helper={handleValidateInput()} />
					<div className="flex justify-center">
						<Button type="submit" className="w-28">
							Salvar
						</Button>
					</div>
				</Dialog.Content>
			</Form>
		</Dialog.Root>
	);
};
