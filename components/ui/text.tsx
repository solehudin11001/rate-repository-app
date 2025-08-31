import { Text as NativeText, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

interface Props extends React.ComponentProps<typeof NativeText> {
	weight?: "regular" | "medium";
}

export default function Text({ weight = "regular", style, ...props }: Props) {
	return <NativeText style={[styles[weight], style]} {...props} />;
}

const styles = StyleSheet.create({
	regular: {
		color: colors.onSurfaceVariant,
		fontFamily: "Roboto-Regular",
		fontWeight: 400,
	},
	medium: {
		color: colors.onSurface,
		fontFamily: "Roboto-Medium",
		fontWeight: 500,
	},
});
