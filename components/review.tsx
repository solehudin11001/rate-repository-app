import { colors } from "@/constants/theme";
import { localeString } from "@/utils/utils";
import { StyleSheet, View } from "react-native";
import Text from "./ui/text";

interface Props {
	rating: number;
	username: string;
	date: string;
	content: string;
}

export default function Review({ rating, username, date, content }: Props) {
	return (
		<View style={styles.review}>
			<View style={styles.ranting}>
				<Text size="md">{rating}</Text>
			</View>
			<View style={styles.copy}>
				<Text variant="primary" size="md">
					{username}
				</Text>
				<Text>{localeString(date)}</Text>
				<Text>{content}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	review: {
		backgroundColor: colors.surfaceContainer,
		flexDirection: "row",
		gap: 16,
		padding: 24,
	},
	ranting: {
		borderColor: colors.outline,
		borderWidth: 4,
		borderRadius: 32,
		alignItems: "center",
		justifyContent: "center",
		height: 64,
		width: 64,
	},
	copy: {
		flex: 1,
		gap: 4,
	},
});
