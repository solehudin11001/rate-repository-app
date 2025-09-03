import { ApolloProvider } from "@apollo/client/react";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../constants/colors";
import { apolloClient } from "../lib/apollo";

export default function Layout() {
	const [fontsLoaded] = Font.useFonts({
		"Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);
	}

	return (
		<ApolloProvider client={apolloClient}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ApolloProvider>
	);
}
