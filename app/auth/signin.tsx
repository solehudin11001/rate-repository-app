import SignIn from "@/components/signin";
import { Stack } from "expo-router";

export default function Route() {
	return (
		<>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					headerTitle: "Sign In",
				}}
			/>
			<SignIn />
		</>
	);
}
