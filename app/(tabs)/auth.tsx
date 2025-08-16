import Login from "@/components/login";
import Logout from "@/components/logout";
import { authConsumer } from "@/context/auth-provider";

export default function Auth() {
	const auth = authConsumer();

	if (auth?.user?.me) {
		return <Logout />;
	}

	return <Login />;
}
