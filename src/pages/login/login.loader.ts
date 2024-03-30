import { type LoaderFunction, redirect } from "react-router-dom";

export const loginLoader: LoaderFunction = () => {
	const accessToken = localStorage.getItem("accessToken");

	if (accessToken) {
		return redirect("/home");
	}

	return null;
};
