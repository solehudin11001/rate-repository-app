import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				headerTitle: "",
				tabBarIconStyle: { display: "none" },
				tabBarLabelStyle: {
					color: "#006876",
					fontSize: 14,
					fontWeight: "600",
					paddingTop: 10,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Repositories",
				}}
			/>
			<Tabs.Screen
				name="login"
				options={{
					title: "Login",
				}}
			/>
		</Tabs>
	);
}
