import { useQuery } from "@apollo/client/react";
import type { DocumentNode } from "graphql";
import type { Repository } from "../types";

export default function useRepository(
	query: DocumentNode,
	variables: { id: string },
) {
	const { data, error, loading } = useQuery<Repository>(query, {
		variables,
	});

	if (error) {
		console.error("Error fetching repository:", error);
	}

	return {
		data,
		error,
		loading,
	};
}
