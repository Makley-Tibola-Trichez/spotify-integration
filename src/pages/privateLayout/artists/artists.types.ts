import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import type { InfiniteLoader, PromiseInfiniteLoader } from "@/types/loader";

export type ArtistsLoader = InfiniteLoader<"artistsQuery", ListUserTopArtistsResponse>;

export type PromiseArtistsLoader = PromiseInfiniteLoader<ArtistsLoader>;
