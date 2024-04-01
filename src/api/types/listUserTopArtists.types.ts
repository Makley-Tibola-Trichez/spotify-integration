export type ListUserTopArtistsResponse = {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: ItemListUserTopArtistsResponse[];
};

export type ListUserTopArtistsParams = {
	/**
	 * Over what time frame the affinities are computed. Valid values: long_term (calculated from ~1 year of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term
	 * @default "medium_term"
	 */
	time_range?: string;

	/**
	 * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
	 * range: 0 - 50
	 * @default 20
	 */
	limit?: number;

	/**
	 * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
	 * @default 0
	 */
	offset?: number;
};

export type ItemListUserTopArtistsResponse = {
	external_urls: _ExternalUrls;
	followers: _Followers;
	genres: string[];
	href: string;
	id: string;
	images: _Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};

type _ExternalUrls = {
	spotify: string;
};

type _Followers = {
	href: string;
	total: number;
};

type _Image = {
	url: string;
	height: number;
	width: number;
};
