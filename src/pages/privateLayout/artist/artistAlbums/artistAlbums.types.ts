import type { ListArtistAlbumsResponse } from "@/api/types/listArtistAlbums.types";
import type { AxiosResponse } from "axios";

export type ArtistAlbumsLoader = {
	artistAlbumsQuery: AxiosResponse<ListArtistAlbumsResponse>;
};
export type PromiseArtistAlbumsLoader = {
	artistAlbumsQuery: Promise<ArtistAlbumsLoader["artistAlbumsQuery"]>;
};
