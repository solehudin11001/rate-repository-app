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
		edges: {
			node: RepositoryType;
		}[];
	};
}

export interface RepositoryDetailType {
	repository: RepositoryType & {
		url: string;
		reviews: {
			edges: {
				node: ReviewsType;
			}[];
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
	};
}

export interface ContextType<T> {
	user: UserType | undefined;
	storage: T;
}
