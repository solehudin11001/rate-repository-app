import Login from "@/components/login";
import { Stack } from "expo-router";

export default function Route() {
	return (
		<>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					headerTitle: "Login",
				}}
			/>
			<Login />
		</>
	);
}
