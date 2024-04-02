import type { ExternalUrls, Followers, Image } from "./spotifyService.types";

export type GetUserProfileResponse = {
	country: string;
	display_name: string;
	email: string;
	explicit_content: _ExplicitContent;
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	images: Image[];
	product: string;
	type: string;
	uri: string;
};

type _ExplicitContent = {
	filter_enabled: boolean;
	filter_locked: boolean;
};
