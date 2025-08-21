import Review from "@/components/review";
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import { colors } from "@/constants/theme";
import { DELETE_REVIEW } from "@/graphql/mutations";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import { Alert, FlatList, StyleSheet, View } from "react-native";

export default function Reviews() {
	const { user, loading, refetch } = useCurrentUser(true);
	const [mutate] = useMutation(DELETE_REVIEW);
	const router = useRouter();

	if (loading) {
		return <Loader />;
	}

	function handleDeleteReview(id: string) {
		Alert.alert("Delete review", "Are you sure to delete this review.", [
			{
				text: "Cancel",
				style: "cancel",
			},
			{
				text: "OK",
				onPress: async () => {
					try {
						await mutate({
							variables: { deleteReviewId: id },
						});
						await refetch();
					} catch (error) {
						console.log("Error deleting review:", error);
					}
				},
			},
		]);
	}

	const reviewNodes = user?.me.reviews
		? user.me.reviews.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={reviewNodes}
			ItemSeparatorComponent={Separator}
			renderItem={({ item }) => (
				<View key={item.id}>
					<Review
						rating={item.rating}
						username={item.repository.fullName}
						date={item.createdAt}
						content={item.text}
					/>
					<View style={styles.group}>
						<Button
							onPress={() =>
								router.navigate({
									pathname: "/repository/[id]",
									params: { id: item.repositoryId },
								})
							}
						>
							View repository
						</Button>
						<Button
							onPress={() => handleDeleteReview(item.id)}
							variant="danger"
						>
							Delete
						</Button>
					</View>
				</View>
			)}
			style={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surface,
		flex: 1,
	},
	group: {
		backgroundColor: colors.surfaceContainer,
		flexDirection: "row",
		gap: 8,
		paddingBottom: 24,
		paddingHorizontal: 24,
	},
});
