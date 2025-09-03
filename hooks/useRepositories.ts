import { useQuery } from "@apollo/client/react";
import type { DocumentNode } from "graphql";
import type { ArgumentsQuery, Repositories } from "../types";

export default function useRepositories(
	query: DocumentNode,
	variables: ArgumentsQuery,
) {
	const { data, error, loading } = useQuery<Repositories>(query, { variables });

	if (error) {
		console.error("Error fetching repositories:", error);
	}

	const repositories = data
		? data.repositories.edges.map((edge) => edge.node)
		: [];

	return {
		data: repositories,
		error,
		loading,
	};
}
