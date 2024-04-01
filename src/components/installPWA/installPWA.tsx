import { CircleArrowDownIcon } from "lucide-react";
import { useInstallPWA } from "./useInstallPWA";

export const InstallPWA = () => {
	const { onClick, supportsPWA } = useInstallPWA();

	if (!supportsPWA) {
		return null;
	}

	return (
		<button
			className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10"
			id="setup_button"
			aria-label="Install app"
			role="button"
			title="Install app"
			onClick={onClick}
			type="button"
		>
			<CircleArrowDownIcon />
			Instalar PWA
		</button>
	);
};
