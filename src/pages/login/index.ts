import { loginLoader } from "./login.loader";
import LoginView from "./login.view";

export const Login = {
	ViewModel: LoginView,
	loader: loginLoader,
} as const;
