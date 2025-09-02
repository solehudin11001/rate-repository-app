import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

interface Props extends React.ComponentProps<typeof Pressable> {
	rounded?: boolean;
	size?: "text" | "icon";
	variant?: "primary" | "destructive";
}

export default function Button({
	children,
	rounded = false,
	size = "text",
	variant,
	...props
}: Props) {
	return (
		<Pressable
			style={[
				styles.button,
				styles[size],
				rounded && styles.rounded,
				variant && styles[variant],
			]}
			{...props}
		>
			{children}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.surfaceContainer,
		borderRadius: 4,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	primary: {
		backgroundColor: colors.primary,
	},
	destructive: {
		backgroundColor: colors.error,
	},
	icon: {
		width: 56,
	},
	text: {
		paddingHorizontal: 16,
	},
	rounded: {
		borderRadius: 24,
	},
});
