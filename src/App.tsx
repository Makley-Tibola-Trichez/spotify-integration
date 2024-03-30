import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { threeRoutes } from "./routes";

export default function App() {
	const _queryClient = useQueryClient();

	return (
		<RouterProvider
			router={threeRoutes(_queryClient)}
			future={{
				v7_startTransition: true,
			}}
		/>
	);
}
