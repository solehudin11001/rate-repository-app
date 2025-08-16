import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import Text from "./ui/text";

interface Props {
	username: string;
}

export default function Header({ username }: Props) {
	return (
		<View style={styles.header}>
			<Text variant="primary" size="md">
				Hello, {username}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.surface,
		padding: 24,
	},
});
