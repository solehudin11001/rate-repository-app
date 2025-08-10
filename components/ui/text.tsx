import { Text as NativeText } from "react-native";

interface Props extends React.ComponentProps<typeof NativeText> {
	variant?: "primary" | "default";
	size?: "base" | "md" | "lg";
}

const text = {
	variants: {
		primary: { color: "#171d1e", fontWeight: "600" },
		default: { color: "#3f484a" },
	},
	size: {
		base: { fontSize: 14, lineHeight: 20 },
		md: { fontSize: 16, lineHeight: 24 },
		lg: { fontSize: 20, lineHeight: 28 },
	},
};

export default function Text({
	variant = "default",
	size = "base",
	...props
}: Props) {
	return (
		<NativeText style={[text.variants[variant], text.size[size]]} {...props} />
	);
}
