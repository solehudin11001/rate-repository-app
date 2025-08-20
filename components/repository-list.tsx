import Repository from "@/components/repository";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import type { RepositoriesType } from "@/types";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

interface Props {
	children: React.ReactNode;
	data: RepositoriesType | undefined;
	loading: boolean;
}

export default function Repositorylist({ children, data, loading }: Props) {
	if (loading) {
		return <Loader />;
	}

	const repositoryNodes = data
		? data.repositories.edges.map((edge) => edge.node)
		: [];

	function handleNavigate(id: string) {
		router.navigate({
			pathname: "./repository/[id]",
			params: { id },
		});
	}

	return (
		<View style={styles.container}>
			{children}
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={Separator}
				renderItem={({ item }) => (
					<Pressable key={item.id} onPress={() => handleNavigate(item.id)}>
						<Repository item={item} />
					</Pressable>
				)}
				style={styles.container}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
