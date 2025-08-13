import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import Text from "./text";

interface Props {
	children: React.ReactNode;
}

export default function Badge({ children }: Props) {
	return (
		<View style={styles.badge}>
			<Text style={styles.badgeCopy}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	badge: {
		backgroundColor: colors.primary,
		borderRadius: 6,
		height: 32,
		paddingHorizontal: 12,
	},
	badgeCopy: {
		color: colors.onPrimary,
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 32,
	},
});
