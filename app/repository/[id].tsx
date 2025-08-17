import RepositoryDetail from "@/components/repository-detail";
import Review from "@/components/review";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import { REPOSITORY_DETAILS } from "@/graphql/queries";
import { useRepositories } from "@/hooks/useRepositories";
import type { RepositoryDetailType } from "@/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";

export default function Route() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { repositories: data, loading } = useRepositories<RepositoryDetailType>(
		REPOSITORY_DETAILS,
		id,
	);

	if (loading) {
		return <Loader />;
	}

	const reviewsNodes = data
		? data.repository.reviews.edges.map((edge) => edge.node)
		: [];

	return (
		<>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					headerTitle: "Detail",
				}}
			/>
			<FlatList
				data={reviewsNodes}
				ItemSeparatorComponent={Separator}
				ListHeaderComponent={() => <RepositoryDetail data={data} />}
				renderItem={({ item }) => <Review key={item.id} data={item} />}
			/>
		</>
	);
}
