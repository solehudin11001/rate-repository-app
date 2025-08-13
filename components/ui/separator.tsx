import { colors } from "@/constants/theme";
import { View } from "react-native";

export default function Separator() {
	return (
		<View
			style={{
				backgroundColor: colors.surface,
				height: 10,
			}}
		/>
	);
}
