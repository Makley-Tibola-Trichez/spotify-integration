import type { ItemLast5PlayedTracksResponse } from "@/api/types/getLast5PlayedTracks.types";
import { Avatar } from "@/components/ui/avatar";
import { Table } from "@/components/ui/table";
import dayjs from "dayjs";

export const HomeTableRowView = (props: ItemLast5PlayedTracksResponse) => {
	return (
		<Table.Row>
			<Table.Cell className="flex items-center gap-3">
				<Avatar.Root className="rounded-lg">
					<Avatar.Image src={props.track.album.images[0].url} />
					<Avatar.Fallback>{props.track.name[0]}</Avatar.Fallback>
				</Avatar.Root>
				<div>''
					<div className="text-sm">{props.track.name}</div>
					<div className="text-muted-foreground text-xs">
						{props.track.artists.map((artist) => artist.name).join(", ")}
					</div>
				</div>
			</Table.Cell>

			<Table.Cell className="hidden md:visible">
				<div className="text-sm">{props.track.album.name}</div>
			</Table.Cell>
			<Table.Cell>
				<div className="text-sm">{dayjs(props.played_at).fromNow()}</div>
			</Table.Cell>
		</Table.Row>
	);
};
