import { authConsumer } from "@/context/auth-provider";
import { LOGIN } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import type { AuthType } from "@/types";
import { LOGINSCHEMA } from "@/types/schema";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "expo-router";
import Form from "./ui/form";

export default function Login() {
	const [authenticate] = useAuth<AuthType>(LOGIN);
	const auth = authConsumer();
	const client = useApolloClient();
	const router = useRouter();

	async function handleLogin(values: { username: string; password: string }) {
		const { username, password } = values;

		try {
			const { data } = await authenticate(username, password);
			if (data?.authenticate.accessToken) {
				await auth?.storage.saveAccessToken(data.authenticate.accessToken);
				client.resetStore();
				router.replace("/");
			}
		} catch (error) {
			console.log("Failed to login: ", error);
		}
	}

	return <Form schema={LOGINSCHEMA} handleSubmit={handleLogin} />;
}
