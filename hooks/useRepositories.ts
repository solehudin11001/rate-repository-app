import { type DocumentNode, useQuery } from "@apollo/client";

export function useRepositories<T>(
	query: DocumentNode,
	variables?: Record<string, string>,
) {
	const { data, error, loading, refetch } = useQuery<T>(query, {
		fetchPolicy: "cache-and-network",
		variables: variables,
	});

	if (error) {
		console.log("Failed to fetching: ", error);
	}

	return { repositories: data, loading, refetch };
}
