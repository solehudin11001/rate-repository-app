import Header from "@/components/header";
import Repository from "@/components/repository";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import { authConsumer } from "@/context/auth-provider";
import { REPOSITORIES } from "@/graphql/queries";
import { useRepositories } from "@/hooks/useRepositories";
import type { RepositoryType } from "@/types/repository";
import { FlatList, StyleSheet, View } from "react-native";

interface Repositories {
	repositories: {
		edges: {
			node: RepositoryType;
		}[];
	};
}

export default function Index() {
	const { repositories: data, loading } =
		useRepositories<Repositories>(REPOSITORIES);
	const auth = authConsumer();

	if (loading) {
		return <Loader />;
	}

	const repositoryNodes = data
		? data.repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<View style={styles.container}>
			{auth?.user?.me && <Header username={auth.user.me.username} />}
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={Separator}
				renderItem={({ item }) => <Repository item={item} />}
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
