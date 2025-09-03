import { Image } from "expo-image";
import { View } from "react-native";
import { colors } from "../../constants/colors";
import type { Repository } from "../../types";
import Badge from "./badge";
import Stat from "./stat";
import Text from "./text";

interface Props {
	data: Repository;
}

export default function Card({ data }: Props) {
	return (
		<View
			style={{
				backgroundColor: colors.surfaceContainer,
				borderRadius: 8,
				gap: 24,
				padding: 24,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					gap: 20,
				}}
			>
				<Image
					contentFit="cover"
					source={data.ownerAvatarUrl}
					style={{
						borderRadius: 24,
						height: 48,
						width: 48,
					}}
				/>
				<View
					style={{
						alignItems: "flex-start",
						flex: 1,
						gap: 4,
					}}
				>
					<Text weight="medium">{data.fullName}</Text>
					<Badge content={data.language} />
					<Text numberOfLines={2} ellipsizeMode="tail" style={{ height: 48 }}>
						{data.description}
					</Text>
				</View>
			</View>
			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Stat icon="star-outline" value={data.stargazersCount} />
				<Stat icon="source-branch" value={data.forksCount} />
				<Stat icon="comment-outline" value={data.reviewCount} />
				<Stat icon="progress-star" value={data.ratingAverage} />
			</View>
		</View>
	);
}
