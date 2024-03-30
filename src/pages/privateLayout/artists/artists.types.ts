import type { ListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import type { AxiosResponse } from "axios";

export type ArtistsLoader = {
	artistsQuery: AxiosResponse<ListUserTopArtistsResponse>;
};
export type PromiseArtistsLoader = {
	artistsQuery: Promise<ArtistsLoader["artistsQuery"]>;
};
