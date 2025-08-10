import { suffix } from "@/libs/utils";
import type { Repository as RepositoryType } from "@/types/repository";
import { Image, View } from "react-native";
import Badge from "./ui/badge";
import Text from "./ui/text";

interface Props {
	item: RepositoryType;
}

export default function Repository({ item }: Props) {
	return (
		<View
			style={{
				backgroundColor: "#f5fafc",
				gap: 24,
				padding: 24,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					gap: 24,
				}}
			>
				<Image
					source={{
						uri: item.ownerAvatarUrl,
					}}
					alt={item.fullName}
					style={{ borderRadius: 8, flexShrink: 0 }}
					height={48}
					width={48}
				/>
				<View
					style={{
						alignItems: "flex-start",
						flexGrow: 1,
						gap: 8,
						width: 0,
					}}
				>
					<Text variant="primary" size="lg">
						{item.fullName}
					</Text>
					<Text>{item.description}</Text>
					<Badge>{item.language}</Badge>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View style={{ alignItems: "center" }}>
					<Text variant="primary" size="md">
						{suffix(item.forksCount)}
					</Text>
					<Text>Stars</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text variant="primary" size="md">
						{suffix(item.stargazersCount)}
					</Text>
					<Text>Forks</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text variant="primary" size="md">
						{suffix(item.ratingAverage)}
					</Text>
					<Text>Rating</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text variant="primary" size="md">
						{suffix(item.reviewCount)}
					</Text>
					<Text>Reviews</Text>
				</View>
			</View>
		</View>
	);
}
