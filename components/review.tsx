import { colors } from "@/constants/theme";
import type { ReviewsType } from "@/types";
import { localeString } from "@/utils/utils";
import { StyleSheet, View } from "react-native";
import Text from "./ui/text";

interface Props {
	data: ReviewsType;
}

export default function Review({ data }: Props) {
	return (
		<View style={styles.review}>
			<View style={styles.ranting}>
				<Text size="md">{data.rating}</Text>
			</View>
			<View style={styles.copy}>
				<Text variant="primary" size="md">
					{data.user.username}
				</Text>
				<Text>{localeString(data.createdAt)}</Text>
				<Text>{data.text}</Text>
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
