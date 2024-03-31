import { profileLoader } from "./profile.loader";
import { ProfileViewModel } from "./profile.viewmodel";

export const Profile = {
	ViewModel: ProfileViewModel,
	loader: profileLoader,
} as const;
