import { colors } from "@/constants/theme";
import { Text as NativeText } from "react-native";

interface Props extends React.ComponentProps<typeof NativeText> {
	variant?: "primary" | "default";
	size?: "base" | "md" | "lg";
}

export default function Text({
	variant = "default",
	size = "base",
	...props
}: Props) {
	return (
		<NativeText style={[text.variants[variant], text.sizes[size]]} {...props} />
	);
}

const text = {
	variants: {
		primary: { color: colors.onSurface, fontWeight: "500" },
		default: { color: colors.onSurfaceVar },
	},
	sizes: {
		base: { fontSize: 14, lineHeight: 20 },
		md: { fontSize: 16, lineHeight: 24 },
		lg: { fontSize: 18, lineHeight: 26 },
	},
};
