import { type DocumentNode, useQuery } from "@apollo/client";

export function useRepositories<T>(query: DocumentNode, param?: string) {
	const { data, error, loading, refetch } = useQuery<T>(query, {
		fetchPolicy: "cache-and-network",
		variables: {
			id: param,
		},
	});

	if (error) {
		console.log("Failed to fetching repositories: ", error);
	}

	return { repositories: data, loading, refetch };
}
