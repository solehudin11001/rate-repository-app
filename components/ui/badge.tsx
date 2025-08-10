import { View } from "react-native";
import Text from "./text";

interface Props {
	children: React.ReactNode;
}

export default function Badge({ children }: Props) {
	return (
		<View
			style={{
				backgroundColor: "#006876",
				borderRadius: 8,
				paddingHorizontal: 12,
				paddingVertical: 8,
			}}
		>
			<Text style={{ color: "#ffffff" }}>{children}</Text>
		</View>
	);
}
