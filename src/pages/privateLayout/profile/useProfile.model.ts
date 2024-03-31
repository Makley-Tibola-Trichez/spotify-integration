import Cookies from "js-cookie";
import type { ProfileLoader } from "./profile.types";

export function useProfileModel(props: ProfileLoader) {
	const handleLogout = () => {
		Cookies.remove("accessToken");
		Cookies.remove("refreshToken");
		localStorage.removeItem("codeVerifier");

		location.replace("/");
	};

	return { handleLogout, ...props };
}
