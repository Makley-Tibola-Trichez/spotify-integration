import type { GetUserProfileResponse } from "@/api/types/getUserProfile.types";
import type { AxiosResponse } from "axios";

export type ProfileLoader = {
	profileQuery: AxiosResponse<GetUserProfileResponse>;
};

export type PromiseProfileLoader = {
	profileQuery: Promise<ProfileLoader["profileQuery"]>;
};
