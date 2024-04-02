import { homeLoader } from "./home.loader";
import HomeViewModel from "./home.viewmodel";

export const Home = {
	ViewModel: HomeViewModel,
	loader: homeLoader,
} as const;
