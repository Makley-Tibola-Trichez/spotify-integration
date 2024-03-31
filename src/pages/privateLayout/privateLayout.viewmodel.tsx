import { withAuthInPrivateRoute } from "@/hocs/withAuthInPrivateRoute";
import { PrivateLayoutView } from "./privateLayout.view";

export const PrivateLayoutViewModel = withAuthInPrivateRoute(() => <PrivateLayoutView />);

PrivateLayoutViewModel.displayName = "PrivateLayoutViewModel";
