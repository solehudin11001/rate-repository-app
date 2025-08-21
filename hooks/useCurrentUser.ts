import { ME } from "@/graphql/queries";
import type { UserType } from "@/types";
import { useQuery } from "@apollo/client";

export function useCurrentUser(includeReviews?: boolean) {
	const { data, error, loading, refetch } = useQuery<UserType>(ME, {
		fetchPolicy: "cache-and-network",
		variables: {
			includeReviews: Boolean(includeReviews),
		},
	});

	if (error) console.log("Failed to fetching reviews: ", error);

	return { user: data, loading, refetch };
}
