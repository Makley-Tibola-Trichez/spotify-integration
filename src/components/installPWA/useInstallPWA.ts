import { useEffect, useState } from "react";

export const useInstallPWA = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState<TransitionEvent | null>(null);

	useEffect(() => {
		const handler = (e: TransitionEvent) => {
			e.preventDefault();

			setSupportsPWA(true);
			setPromptInstall(e);
		};
		//@ts-ignore could not find the correct event type for this case
		window.addEventListener("beforeinstallprompt", handler);

		return () => window.removeEventListener("transitionend", handler);
	}, []);

	const onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();
		if (!promptInstall) {
			return;
		}

		// @ts-ignore could not find the correct event type for this case
		promptInstall.prompt();
	};

	return { supportsPWA, onClick };
};
