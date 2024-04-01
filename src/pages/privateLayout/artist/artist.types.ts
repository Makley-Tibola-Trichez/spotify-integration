import type { GetArtistResponse } from "@/api/types/getArtist.types";
import type { Loader, PromiseLoader } from "@/types/loader";

export type ArtistLoader = Loader<"artistQuery", GetArtistResponse>;

export type PromiseArtistLoader = PromiseLoader<ArtistLoader>;
