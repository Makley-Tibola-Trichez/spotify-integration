import type useDashboardModel from "./useDashboard.model";

export default function DashboardView(props: ReturnType<typeof useDashboardModel>) {
	return <span className="text-white">{props.code?.toString()}</span>;
}
