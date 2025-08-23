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
	const {
		repositories: data,
		loading,
		fetchMore,
	} = useRepositories<RepositoryDetailType>(REPOSITORY_DETAILS, {
		first: 4,
		id: id,
	});

	if (loading) {
		return <Loader />;
	}

	const reviewsNodes = data
		? data.repository.reviews.edges.map((edge) => edge.node)
		: [];

	function handleEndReach() {
		if (data) {
			const { pageInfo } = data.repository.reviews;
			fetchMore(pageInfo.hasNextPage, pageInfo.endCursor);
		}
		console.log("review more");
	}

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
				renderItem={({ item }) => (
					<Review
						key={item.id}
						rating={item.rating}
						username={item.user.username}
						date={item.createdAt}
						content={item.text}
					/>
				)}
				onEndReached={handleEndReach}
				onEndReachedThreshold={0.5}
			/>
		</>
	);
}
