import { apolloClient } from "@/utils/apollo";
import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<ApolloProvider client={apolloClient}>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{
						headerShown: false,
					}}
				/>
			</Stack>
		</ApolloProvider>
	);
}
