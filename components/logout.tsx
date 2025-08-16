import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from "./ui/button";

export default function Logout() {
	const auth = authConsumer();
	const client = useApolloClient();
	const router = useRouter();

	async function handleLogout() {
		await auth?.storage.clearAccessToken();
		client.resetStore();
		router.replace("/");
	}

	return (
		<View style={styles.container}>
			<Button onPress={handleLogout}>Log out</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surface,
		flex: 1,
		padding: 24,
	},
});
