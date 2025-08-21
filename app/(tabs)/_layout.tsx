import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import Octicons from "@expo/vector-icons/Octicons";
import Constants from "expo-constants";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
	const auth = authConsumer();
	const isLoggedIn = Boolean(auth?.user?.me);
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
				name="auth"
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="person" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Protected guard={isLoggedIn}>
				<Tabs.Screen
					name="reviews"
					options={{
						tabBarIcon: ({ color }) => (
							<Octicons name="comment" size={24} color={color} />
						),
					}}
				/>
			</Tabs.Protected>
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
