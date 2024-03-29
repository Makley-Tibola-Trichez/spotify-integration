import { withAccessToken } from "@/hocs/withAccessToken";
import DashboardView from "./dashboard.view";
import useDashboardModel from "./useDashboard.model";

export default function DashboardViewModel() {
	return <DashboardView {...useDashboardModel()} />;
}
