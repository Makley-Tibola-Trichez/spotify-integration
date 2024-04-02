import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNewPlaylistModel = () => {
	const [inputValue, setInputValue] = useState<string | null>(null);

	const _navigate = useNavigate();
	const handleCloseDialog = (state: boolean) => !state && _navigate("..");

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

	return { handleValidateInput, handleCloseDialog, handleInputChange };
};
