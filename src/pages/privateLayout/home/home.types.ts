import type { GetLast5PlayedTracksResponse } from "@/api/types/getLast5PlayedTracks.types";
import type { Loader, PromiseLoader } from "@/types/loader";

export type LoaderHome = Loader<"last5PlayedTracksQuery", GetLast5PlayedTracksResponse>;

export type PromiseLoaderHome = PromiseLoader<LoaderHome>;
