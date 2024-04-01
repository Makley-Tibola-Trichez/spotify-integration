import type { GenerateAccessTokenResponse } from "@/api/types/generateAccessToken.types";
import Cookies from "js-cookie";
import { updateAuthTokens } from "../updateAuthTokens";

describe("updateAuthTokens", () => {
	it("should set the expiration date of the access token cookie when response is valid", () => {
		const response: GenerateAccessTokenResponse = {
			access_token: "access_token",
			token_type: "token_type",
			scope: "scope",
			expires_in: 3600,
			refresh_token: "refresh_token",
		};

		expect(updateAuthTokens(response)).toBeUndefined();
	});
});
