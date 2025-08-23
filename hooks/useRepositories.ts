import { type DocumentNode, useQuery } from "@apollo/client";

export function useRepositories<T>(
	query: DocumentNode,
	variables?: Record<string, string | number>,
) {
	const { data, error, loading, fetchMore } = useQuery<T>(query, {
		fetchPolicy: "cache-and-network",
		variables: variables,
	});

	function handleFetchMore(hasNextPage: boolean, endCursor: string) {
		const canFetchMore = !loading && hasNextPage;

		if (!canFetchMore) return;

		fetchMore({
			variables: {
				after: endCursor,
				...variables,
			},
		});
	}

	if (error) {
		console.log("Failed to fetching: ", error);
	}

	return { repositories: data, loading, fetchMore: handleFetchMore };
}
