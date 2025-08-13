import { colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props extends React.ComponentProps<typeof Pressable> {
	children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
	return (
		<Pressable style={styles.button} {...props}>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 8,
		height: 48,
		alignItems: "center",
		paddingHorizontal: 16,
	},
	text: {
		color: colors.onPrimary,
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 48,
	},
});
