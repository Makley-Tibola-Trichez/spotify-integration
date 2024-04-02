import { NewPlaylistView } from "./newPlaylist.view";
import { useNewPlaylistModel } from "./useNewPlaylist.model";

export const NewPlaylistViewModel = () => {
	return <NewPlaylistView {...useNewPlaylistModel()} />;
};
