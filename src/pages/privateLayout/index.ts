import { privateLayoutLoader } from "./privateLayout.loader";
import { PrivateLayoutView } from "./privateLayout.view";

export const PrivateLayout = {
	ViewModel: PrivateLayoutView,
	loader: privateLayoutLoader,
} as const;
