import { Progress } from "@/components/ui/progress";
import { Suspense } from "react";
import { PlaylistsView } from "./playlists.view";
import { usePlaylistsModel } from "./usePlaylists.model";

export function PlaylistsViewModel() {
	return (
		<Suspense fallback={<Progress />}>
			<PlaylistsView {...usePlaylistsModel()} />
		</Suspense>
	);
}
