import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";

export default function Main({
	style,
	...props
}: React.ComponentProps<typeof View>) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				{
					backgroundColor: colors.surface,
					flex: 1,
					paddingBottom: insets.bottom,
					paddingHorizontal: 24,
					paddingTop: insets.top + 24,
				},
			]}
			{...props}
		/>
	);
}
