import { colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loader() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={colors.primary} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surface,
		justifyContent: "center",
		flex: 1,
	},
});
