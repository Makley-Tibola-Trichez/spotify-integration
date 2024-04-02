import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { Avatar } from "@/components/ui/avatar";
import { Table } from "@/components/ui/table";
import { Tooltip } from "@/components/ui/tooltip";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ClockIcon } from "lucide-react";
import { HomeSkeleton } from "./home.skeleton";
import type { useHomeModel } from "./useHome.model";
dayjs.extend(relativeTime);

export function HomeView({ last5PlayedTracksQuery }: ReturnType<typeof useHomeModel>) {
	return (
		<ContentLayout>
			<div className="font-bold text-3xl">Últimas faixas tocadas</div>
			<div className="flex flex-col gap-4">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head className="w-[35%]">Título</Table.Head>
							<Table.Head className="hidden w-[35%] md:visible">Álbum</Table.Head>
							<Table.Head>
								<Tooltip.Provider>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<ClockIcon />
										</Tooltip.Trigger>
										<Tooltip.Content>Última reprodução</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>
							</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<HomeSkeleton visible={!last5PlayedTracksQuery.isFetched} />
						{last5PlayedTracksQuery.data?.data.items.map((item) => {
							return (
								<Table.Row key={item.played_at}>
									<Table.Cell className="flex items-center gap-3">
										<Avatar.Root className="rounded-lg">
											<Avatar.Image src={item.track.album.images[0].url} />
											<Avatar.Fallback>{item.track.name[0]}</Avatar.Fallback>
										</Avatar.Root>
										<div>
											<div className="text-sm">{item.track.name}</div>
											<div className="text-muted-foreground text-xs">
												{item.track.artists.map((artist) => artist.name).join(", ")}
											</div>
										</div>
									</Table.Cell>

									<Table.Cell className="hidden md:visible">
										<div className="text-sm">{item.track.album.name}</div>
									</Table.Cell>
									<Table.Cell>
										<div className="text-sm">{dayjs(item.played_at).fromNow()}</div>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table.Root>
			</div>
		</ContentLayout>
	);
}
