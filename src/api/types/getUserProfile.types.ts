import type { _ExternalUrls, _Followers, _Image } from "./spotifyService.types";

export type GetUserProfileResponse = {
	country: string;
	display_name: string;
	email: string;
	explicit_content: _ExplicitContent;
	external_urls: _ExternalUrls;
	followers: _Followers;
	href: string;
	id: string;
	images: _Image[];
	product: string;
	type: string;
	uri: string;
};

type _ExplicitContent = {
	filter_enabled: boolean;
	filter_locked: boolean;
};
