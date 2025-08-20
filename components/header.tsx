import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import { StyleSheet, View } from "react-native";
import Picker from "./ui/picker";
import Text from "./ui/text";

export interface Props {
	sortedBy: string;
	setSortedPicker: (sortedBy: string) => void;
}

export default function Header({ sortedBy, setSortedPicker }: Props) {
	const auth = authConsumer();

	return (
		<View style={styles.header}>
			{auth?.user?.me && (
				<Text variant="primary" size="md">
					Hello, {auth.user.me.username}
				</Text>
			)}
			<Picker sortedBy={sortedBy} setSortedPicker={setSortedPicker} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.surface,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 24,
	},
});
