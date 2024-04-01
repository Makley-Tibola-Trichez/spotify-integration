import { forwardRef } from "react";
import type { useArtistItemModel } from "./useArtistItem.model";

export const ArtistItemView = forwardRef<HTMLLIElement, ReturnType<typeof useArtistItemModel>>(
	({ item, handleSeeArtist }, ref) => {
		return (
			<li
				ref={ref}
				className="flex cursor-pointer items-center gap-4 rounded-lg px-3 py-2 text-white transition-all hover:bg-white/10"
				onClick={handleSeeArtist}
				onKeyUp={handleSeeArtist}
				onKeyDown={handleSeeArtist}
			>
				<div className="overflow-hidden rounded-full">
					<img src={item.images[0].url} alt={item.name} className="h-[72px] w-[72px] bg-cover object-cover" />
				</div>
				<div className="text-sm">{item.name}</div>
			</li>
		);
	},
);

ArtistItemView.displayName = "ArtistItemView";
