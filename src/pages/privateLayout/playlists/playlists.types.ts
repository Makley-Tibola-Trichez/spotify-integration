import type { ListUserPlaylistsResponse } from "@/api/types/listUserPlaylists.types";
import type { InfiniteLoader, PromiseInfiniteLoader } from "@/types/loader";

export type PlaylistsLoader = InfiniteLoader<"playlistsQuery", ListUserPlaylistsResponse>;

export type PromisePlaylistsLoader = PromiseInfiniteLoader<PlaylistsLoader>;
