import type { ListArtistAlbumsResponse } from "@/api/types/listArtistAlbums.types";
import type { InfiniteLoader, PromiseInfiniteLoader } from "@/types/loader";

export type ArtistAlbumsLoader = InfiniteLoader<"artistAlbumsQuery", ListArtistAlbumsResponse>;

export type PromiseArtistAlbumsLoader = PromiseInfiniteLoader<ArtistAlbumsLoader>;
