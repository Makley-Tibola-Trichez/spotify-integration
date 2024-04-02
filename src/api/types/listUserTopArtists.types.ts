import type { ExternalUrls, Followers, Image, SpotifyListParams } from "./spotifyService.types";

export type ListUserTopArtistsResponse = {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: ItemListUserTopArtistsResponse[];
};

export type ListUserTopArtistsParams = SpotifyListParams & {
	/**
	 * Over what time frame the affinities are computed. Valid values: long_term (calculated from ~1 year of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term
	 * @default "medium_term"
	 */
	time_range?: string;
};

export type ItemListUserTopArtistsResponse = {
	external_urls: ExternalUrls;
	followers: Followers;
	genres: string[];
	href: string;
	id: string;
	images: Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};
