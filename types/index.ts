import type MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

// TabsLabel interface
export interface TabsLabel {
	id: number;
	name: string;
	path: string;
	icon: Icon;
}

// Icon types
export type Icon = React.ComponentProps<typeof MaterialIcons>["name"];

// Arguments interface
export interface ArgumentsQuery {
	orderBy: string;
	orderDirection: string;
	searchKeyword: string;
}

// Arguments action type
export type ArgumentsAction = React.Dispatch<
	React.SetStateAction<ArgumentsQuery>
>;

// Repositories interface
export interface Repositories {
	repositories: {
		edges: {
			node: {
				id: string;
				fullName: string;
			};
		}[];
	};
}
