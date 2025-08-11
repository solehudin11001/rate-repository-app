import Badge from "@/components/ui/badge";
import { Link } from "expo-router";
import { View } from "react-native";

export default function NotFound() {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5fafc",
			}}
		>
			<Link href="/">
				<Badge>Go back</Badge>
			</Link>
		</View>
	);
}
