import Logout from "@/components/logout";
import Button from "@/components/ui/button";
import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import { type RelativePathString, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Auth() {
	const auth = authConsumer();
	const router = useRouter();

	if (auth?.user?.me) {
		return <Logout />;
	}

	function navigate(path: RelativePathString) {
		router.navigate({
			pathname: path,
		});
	}

	return (
		<View style={styles.container}>
			<Button onPress={() => navigate("../auth/login")}>Login</Button>
			<Button onPress={() => navigate("../auth/signin")}>Sign In</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		flex: 1,
		gap: 8,
		padding: 24,
	},
});
