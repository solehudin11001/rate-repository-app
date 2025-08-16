import { AuthProvider } from "@/context/auth-provider";
import { apolloClient } from "@/utils/apollo";
import { AuthStorage } from "@/utils/auth-storage";
import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";

export default function RootLayout() {
	const storage = new AuthStorage();

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider value={storage}>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={{
							headerShown: false,
						}}
					/>
				</Stack>
			</AuthProvider>
		</ApolloProvider>
	);
}
