import Button from "@/components/ui/button";
import { colors } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFound() {
	const router = useRouter();
	return (
		<>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					headerTitle: "Not found",
				}}
			/>
			<View style={styles.container}>
				<Button onPress={() => router.replace({ pathname: "/" })}>
					Back to home
				</Button>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
});
