import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Outlet } from "react-router-dom";
import type { useArtistModel } from "./useArtist.model";

export function ArtistView(props: ReturnType<typeof useArtistModel>) {
	return (
		<ContentLayout>
			<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
				<span className="flex items-center gap-2">
					<Button size="icon" variant={"ghost"} onClick={props.goToPreviousPage}>
						<ArrowLeftIcon />
					</Button>
					<div className="font-bold text-xl">{props.artistQuery.data?.name}</div>
				</span>
				<img
					src={props.artistQuery.data?.images[2].url}
					className="h-[72px] w-[72px] rounded-full bg-cover object-cover"
					alt={props.artistQuery.data?.name}
				/>
			</div>
			<div className="grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
				<Outlet />
			</div>
		</ContentLayout>
	);
}
