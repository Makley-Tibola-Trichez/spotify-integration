import type { useArtistItemModel } from "./useArtistItem.model";

export function ArtistItemView({ item, handleSeeArtist }: ReturnType<typeof useArtistItemModel>) {
	return (
		<li
			className="flex cursor-pointer items-center gap-4 rounded-lg px-3 py-2 text-white transition-all hover:bg-white/10"
			onClick={handleSeeArtist}
			onKeyUp={handleSeeArtist}
			onKeyDown={handleSeeArtist}
		>
			<div className="overflow-hidden rounded-full">
				<img src={item.images[2].url} alt={item.name} className="h-[72px] w-[72px] bg-cover object-cover" />
			</div>
			<div className="text-sm">{item.name}</div>
		</li>
	);
}
