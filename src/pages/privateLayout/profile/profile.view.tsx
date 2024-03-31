import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { useProfileModel } from "./useProfile.model";

export function ProfileView(props: ReturnType<typeof useProfileModel>) {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<Avatar.Root className="h-32 w-32 border border-muted-foreground">
				<Avatar.Image src={props.profileQuery.data.images[1].url} alt="Profile picture" className="object-cover" />
				<Avatar.Fallback>{props.profileQuery.data.display_name[0]}</Avatar.Fallback>
			</Avatar.Root>
			<span className="font-bold text-xl">{props.profileQuery.data.display_name}</span>
			<Button onClick={props.handleLogout}>Sair</Button>
		</div>
	);
}
