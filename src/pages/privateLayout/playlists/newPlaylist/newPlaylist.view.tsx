import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { useNewPlaylistModel } from "./useNewPlaylist.model";

export const NewPlaylistView = ({
	handleValidateInput,
	handleCloseDialog,
	handleInputChange,
	handleSubmit,
}: ReturnType<typeof useNewPlaylistModel>) => {
	return (
		<Dialog.Root open onOpenChange={handleCloseDialog}>
			<form onSubmit={handleSubmit}>
				<Dialog.Content>
					<Dialog.Title>Nova playlist</Dialog.Title>
					<Label htmlFor="playlistName">Dê um nome a sua playlist</Label>
					<Input
						required
						id="playlistName"
						name="playlistName"
						onChange={handleInputChange}
						helper={handleValidateInput()}
					/>
					<div className="flex justify-center">
						<Button type="submit" className="w-28">
							Salvar
						</Button>
					</div>
				</Dialog.Content>
			</form>
		</Dialog.Root>
	);
};
