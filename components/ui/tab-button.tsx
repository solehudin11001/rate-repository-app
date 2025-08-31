import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { TabTriggerSlotProps } from "expo-router/ui";
import { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
	type SharedValue,
	withSpring,
} from "react-native-reanimated";
import { colors } from "../../constants/colors";
import type { Icon } from "../../types";

export default function TabButton({
	animation,
	index,
	icon,
	isFocused,
	...props
}: TabTriggerSlotProps & {
	animation: SharedValue<number>;
	index: number;
	icon: Icon;
}) {
	useEffect(() => {
		if (isFocused) {
			animation.value = withSpring(16 + index * 48, {
				damping: 90,
				stiffness: 900,
			});
		}
	}, [animation, index, isFocused]);

	return (
		<Animated.View>
			<Pressable
				{...props}
				style={[
					isFocused && {
						alignItems: "center",
						height: 40,
						justifyContent: "center",
						width: 64,
					},
				]}
			>
				<MaterialIcons name={icon} size={24} color={colors.onSurface} />
			</Pressable>
		</Animated.View>
	);
}
