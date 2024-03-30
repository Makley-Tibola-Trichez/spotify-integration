import { SpotifyService } from "@/api/spotifyService";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

export function usePlaylistsModel() {
	const [dialogNewPlaylist, _setNewPlaylist] = useState(false);
	const handleOpenDialogNewPlaylist = () => _setNewPlaylist(true);
	const handleCloseDialogNewPlaylist = () => _setNewPlaylist(false);

	const playlistsSuspenseQuery = useQuery({
		queryKey: ["playlists"],
		queryFn: () => SpotifyService.listUserPlaylists(),
	});

	return { playlistsSuspenseQuery, dialogNewPlaylist, handleCloseDialogNewPlaylist, handleOpenDialogNewPlaylist };
}
