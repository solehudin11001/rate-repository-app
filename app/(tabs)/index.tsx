import Header from "@/components/header";
import Repositorylist from "@/components/repository-list";
import { REPOSITORIES } from "@/graphql/queries";
import { useRepositories } from "@/hooks/useRepositories";
import type { RepositoriesType } from "@/types";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
	const [sortedBy, setSortedBy] = useState("CREATED_AT:DESC");
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState("");
	const [order, direction] = sortedBy.split(":");

	useEffect(() => {
		const debounce = setTimeout(() => {
			setSearch(query);
		}, 500);
		return () => clearTimeout(debounce);
	}, [query]);

	const { repositories: data, loading } = useRepositories<RepositoriesType>(
		REPOSITORIES,
		{
			searchKeyword: search,
			orderBy: order,
			orderDirection: direction,
		},
	);

	return (
		<View style={styles.container}>
			<Header
				sortedBy={sortedBy}
				setSortedPicker={setSortedBy}
				query={query}
				setQuery={setQuery}
			/>
			<Repositorylist data={data} loading={loading} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
