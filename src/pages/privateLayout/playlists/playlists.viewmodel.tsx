import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await, Outlet } from "react-router-dom";
import { PlaylistsSkeleton } from "./playlists.skeleton";
import type { PromisePlaylistsLoader } from "./playlists.types";
import { PlaylistsView } from "./playlists.view";
import { usePlaylistsModel } from "./usePlaylists.model";

export function PlaylistsViewModel() {
	const { playlistsQuery } = useTypedLoaderData<PromisePlaylistsLoader>();

	return (
		<Suspense fallback={<PlaylistsSkeleton />}>
			<Await resolve={playlistsQuery}>{() => <PlaylistsView {...usePlaylistsModel()} />}</Await>
			<Outlet />
		</Suspense>
	);
}
