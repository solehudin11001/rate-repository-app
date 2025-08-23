import Repository from "@/components/repository";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import type { RepositoriesType } from "@/types";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet } from "react-native";

interface Props {
	data: RepositoriesType | undefined;
	loading: boolean;
	onEndReach: () => void;
}

export default function Repositorylist({ data, loading, onEndReach }: Props) {
	if (loading) {
		return <Loader />;
	}

	const repositoryNodes = data
		? data.repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={Separator}
			renderItem={({ item }) => (
				<Pressable
					key={item.id}
					onPress={() =>
						router.navigate({
							pathname: "/repository/[id]",
							params: { id: item.id },
						})
					}
				>
					<Repository item={item} />
				</Pressable>
			)}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.5}
			style={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
