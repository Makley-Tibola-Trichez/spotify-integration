export type ExternalUrls = {
	spotify: string;
};

export type Followers = {
	href: string;
	total: number;
};

export type Image = {
	url: string;
	height: number;
	width: number;
};

export type Restrictions = {
	reason: string;
};

export type SpotifyListParams = {
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
