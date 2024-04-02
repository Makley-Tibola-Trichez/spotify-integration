import { HomeView } from "./home.view";
import { useHomeModel } from "./useHome.model";

export default function HomeViewModel() {
	return <HomeView {...useHomeModel()} />;
}
