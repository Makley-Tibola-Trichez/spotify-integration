import type { ListUserPlaylistsResponse } from "@/api/types/listUserPlaylists.types";
import type { AxiosResponse } from "axios";

export type PlaylistsLoader = {
	playlistsQuery: AxiosResponse<ListUserPlaylistsResponse>;
};

export type PromisePlaylistsLoader = {
	playlistsQuery: Promise<AxiosResponse<ListUserPlaylistsResponse>>;
};
