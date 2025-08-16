import { colors } from "@/constants/theme";
import type { RepositoryType } from "@/types/repository";
import { suffix } from "@/utils/utils";
import { Image, StyleSheet, View } from "react-native";
import Badge from "./ui/badge";
import Text from "./ui/text";

interface Props {
	item: RepositoryType;
}

export default function Repository({ item }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<Image
					source={{
						uri: item.ownerAvatarUrl,
					}}
					alt={item.fullName}
					style={styles.image}
				/>
				<View style={styles.copy}>
					<Text variant="primary" size="lg">
						{item.fullName}
					</Text>
					<Text>{item.description}</Text>
					<Badge>{item.language}</Badge>
				</View>
			</View>
			<View style={styles.stat}>
				<View style={styles.statItem}>
					<Text variant="primary" size="md">
						{suffix(item.forksCount)}
					</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.statItem}>
					<Text variant="primary" size="md">
						{suffix(item.stargazersCount)}
					</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.statItem}>
					<Text variant="primary" size="md">
						{suffix(item.ratingAverage)}
					</Text>
					<Text>Rating</Text>
				</View>
				<View style={styles.statItem}>
					<Text variant="primary" size="md">
						{suffix(item.reviewCount)}
					</Text>
					<Text>Reviews</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		gap: 20,
		padding: 24,
	},
	info: {
		flexDirection: "row",
		gap: 20,
	},
	image: {
		borderRadius: 8,
		flexShrink: 0,
		height: 64,
		width: 64,
	},
	copy: {
		alignItems: "flex-start",
		flex: 1,
		gap: 6,
	},
	stat: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	statItem: {
		alignItems: "center",
	},
});
