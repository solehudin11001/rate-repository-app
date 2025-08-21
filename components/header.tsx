import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import { StyleSheet, TextInput, View } from "react-native";
import Picker from "./ui/picker";
import Text from "./ui/text";

interface Props {
	sortedBy: string;
	setSortedPicker: (sortedBy: string) => void;
	query: string;
	setQuery: (query: string) => void;
}

export default function Header({
	sortedBy,
	setSortedPicker,
	query,
	setQuery,
}: Props) {
	const auth = authConsumer();

	return (
		<View style={styles.header}>
			<View style={styles.bar}>
				{auth?.user?.me && (
					<Text variant="primary" size="md">
						Hello, {auth.user.me.username}
					</Text>
				)}
				<Picker sortedBy={sortedBy} setSortedPicker={setSortedPicker} />
			</View>
			<TextInput
				placeholder="Search"
				style={styles.search}
				onChangeText={setQuery}
				value={query}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.surface,
		gap: 24,
		padding: 24,
	},
	bar: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	search: {
		borderColor: colors.outline,
		borderRadius: 8,
		borderWidth: 1,
		height: 48,
		paddingHorizontal: 16,
	},
});
