import type { GetArtistResponse } from "@/api/types/getArtist.types";
import type { AxiosResponse } from "axios";

export type ArtistLoader = {
	artistQuery: AxiosResponse<GetArtistResponse>;
};

export type PromiseArtistLoader = {
	artistQuery: Promise<ArtistLoader["artistQuery"]>;
};
