export type GetArtistResponse = {
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
