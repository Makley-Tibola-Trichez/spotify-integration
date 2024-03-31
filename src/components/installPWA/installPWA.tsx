import { CircleArrowDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const InstallPWA = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState<TransitionEvent | null>(null);

	useEffect(() => {
		const handler = (e: TransitionEvent) => {
			e.preventDefault();
			console.log("we are being triggered :D");
			setSupportsPWA(true);
			setPromptInstall(e);
		};
		//@ts-ignore
		window.addEventListener("beforeinstallprompt", handler);

		return () => window.removeEventListener("transitionend", handler);
	}, []);

	const onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();
		if (!promptInstall) {
			return;
		}
		promptInstall.prompt();
	};
	if (!supportsPWA) {
		return null;
	}
	return (
		<button
			className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10"
			id="setup_button"
			aria-label="Install app"
			title="Install app"
			onClick={onClick}
			type="button"
		>
			<CircleArrowDownIcon />
			Instalar PWA
		</button>
	);
};
