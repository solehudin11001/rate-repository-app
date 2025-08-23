export interface RepositoryType {
	id: string;
	fullName: string;
	description: string;
	language: string;
	forksCount: number;
	stargazersCount: number;
	ratingAverage: number;
	reviewCount: number;
	ownerAvatarUrl: string;
}

export interface RepositoriesType {
	repositories: {
		totalCount: number;
		edges: {
			node: RepositoryType;
			cursor: string;
		}[];
		pageInfo: {
			endCursor: string;
			startCursor: string;
			hasNextPage: boolean;
		};
	};
}

export interface RepositoryDetailType {
	repository: RepositoryType & {
		url: string;
		reviews: {
			totalCount: number;
			edges: {
				node: ReviewsType;
				cursor: string;
			}[];
			pageInfo: {
				endCursor: string;
				startCursor: string;
				hasNextPage: boolean;
			};
		};
	};
}

export interface ReviewsType {
	id: string;
	createdAt: string;
	rating: number;
	text: string;
	user: {
		id: string;
		username: string;
	};
}

export interface AuthType {
	authenticate: {
		accessToken: string;
	};
}

export interface UserType {
	me: {
		id: string;
		username: string;
		reviews: {
			edges: {
				node: {
					text: string;
					repository: {
						fullName: string;
					};
					id: string;
					rating: number;
					createdAt: string;
					repositoryId: string;
				};
			}[];
		};
	};
}

export interface ContextType<T> {
	user: UserType | undefined;
	storage: T;
}
