import { Suspense } from "react";
import { PlaylistsView } from "./playlists.view";
import { usePlaylistsModel } from "./usePlaylists.model";

export function PlaylistsViewModel() {
	return (
		<Suspense fallback={<div />}>
			<PlaylistsView {...usePlaylistsModel()} />
		</Suspense>
	);
}
