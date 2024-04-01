import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import type { InfiniteData } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

export type ArtistsLoader = {
	artistsQuery: InfiniteData<AxiosResponse<ListUserTopArtistsResponse>>;
};
export type PromiseArtistsLoader = {
	artistsQuery: Promise<ArtistsLoader["artistsQuery"]>;
};
