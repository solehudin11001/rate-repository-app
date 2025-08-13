import { colors } from "@/constants/theme";
import Octicons from "@expo/vector-icons/Octicons";
import Constants from "expo-constants";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShadowVisible: false,
				headerStyle: styles.header,
				headerTitleStyle: styles.label,
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: styles.label,
				tabBarItemStyle: styles.barItem,
				tabBarStyle: styles.bar,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="repo" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="login"
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="person" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.surface,
		height: 10 + Constants.statusBarHeight,
	},
	bar: {
		backgroundColor: colors.surface,
		height: 64,
	},
	barItem: {
		alignItems: "center",
		flexDirection: "row",
	},
	label: {
		display: "none",
	},
});
