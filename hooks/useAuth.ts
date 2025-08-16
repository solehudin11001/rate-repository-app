import {
	type DocumentNode,
	type FetchResult,
	type MutationResult,
	useMutation,
} from "@apollo/client";

type UseAuth<T> = [
	authenticate: (
		username: string,
		password: string,
	) => Promise<FetchResult<T>>,
	result: MutationResult<T>,
];

export function useAuth<T>(mutation: DocumentNode): UseAuth<T> {
	const [mutate, result] = useMutation<T>(mutation);

	const authenticate = (username: string, password: string) => {
		return mutate({
			variables: {
				credentials: {
					username,
					password,
				},
			},
		});
	};

	return [authenticate, result];
}