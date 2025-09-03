import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";

interface Props {
	children: React.ReactNode;
}

export default function ScreenWrapper({ children }: Props) {
	return (
		<SafeAreaView
			style={{
				backgroundColor: colors.surface,
				flex: 1,
			}}
		>
			<StatusBar style="light" />
			<View style={{ flex: 1, gap: 24, paddingHorizontal: 24, paddingTop: 24 }}>
				{children}
			</View>
		</SafeAreaView>
	);
}
