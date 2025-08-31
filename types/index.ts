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
