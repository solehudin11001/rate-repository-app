import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { colors } from "../../constants/colors";
import { formatNumberWithK } from "../../lib/utils";
import type { Icon } from "../../types";
import Text from "./text";

interface Props {
	icon: Icon;
	value: number;
}

export default function Stat({ icon, value }: Props) {
	return (
		<View
			style={{
				alignItems: "center",
				flexDirection: "row",
				gap: 4,
			}}
		>
			<MaterialIcon name={icon} size={16} color={colors.onSurface} />
			<Text>{formatNumberWithK(value)}</Text>
		</View>
	);
}
