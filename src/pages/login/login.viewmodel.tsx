import { useLoginModel } from "./useLogin.model";

import { LoginView } from "./login.view";

export default function LoginViewModel() {
	return <LoginView {...useLoginModel()} />;
}
