import { SpotifyService, axiosSpotifyV1 } from "@/api/spotifyService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNewPlaylistModel = () => {
	const [inputValue, setInputValue] = useState<string | null>(null);
	const queryClient = useQueryClient();
	const _navigate = useNavigate();

	const handleCloseDialog = (state = false) => !state && _navigate("..");

	const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		ev.target.value = ev.target.value.trimStart();
		setInputValue(ev.target.value);
	};

	const handleValidateInput = () => {
		if (inputValue === null) {
			return;
		}

		if (!inputValue) {
			return { error: "O nome da playlist é obrigatório" };
		}
	};

	const profileQuery = useQuery({
		queryKey: ["profile"],
		queryFn: () => SpotifyService.getUserProfile(),
	});

	const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		const error = handleValidateInput();

		if (error?.error) {
			return;
		}

		if (!profileQuery.data) {
			throw new Error("Profile not found");
		}

		const formData = new FormData(ev.currentTarget);

		const json = formData.get("playlistName") as string;

		SpotifyService.createPlaylist(profileQuery.data.data.id, {
			name: json,
		}).then(() => {
			queryClient.invalidateQueries({ queryKey: ["playlists"] });
		});

		handleCloseDialog();
	};

	return { handleValidateInput, handleCloseDialog, handleInputChange, handleSubmit };
};
