import { View } from "react-native";
import { colors } from "../../constants/colors";
import Text from "./text";

interface Props {
	content: string;
}

export default function Badge({ content }: Props) {
	return (
		<View
			style={{
				backgroundColor: colors.secondary,
				borderRadius: 12,
				height: 24,
				justifyContent: "center",
				paddingHorizontal: 12,
			}}
		>
			<Text
				style={{
					fontSize: 12,
					lineHeight: 20,
				}}
			>
				{content}
			</Text>
		</View>
	);
}
