import { colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props extends React.ComponentProps<typeof Pressable> {
	children: React.ReactNode;
	variant?: "default" | "danger";
}

export default function Button({
	children,
	variant = "default",
	...props
}: Props) {
	return (
		<Pressable style={[styles.button, styles[variant]]} {...props}>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		height: 48,
		alignItems: "center",
		paddingHorizontal: 16,
	},
	default: { backgroundColor: colors.primary },
	danger: { backgroundColor: colors.error },
	text: {
		color: colors.onPrimary,
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 48,
	},
});
