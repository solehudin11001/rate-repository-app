import type { TabsLabel } from "../types";

export const TABS_LABEL: TabsLabel[] = [
	{ id: 0, name: "index", path: "/", icon: "book-outline" },
	{
		id: 1,
		name: "reviews",
		path: "/reviews",
		icon: "comment-bookmark-outline",
	},
	{ id: 2, name: "account", path: "/account", icon: "account-circle-outline" },
];

export const PICKER_ITEMS = [
	{ id: 0, label: "Latest repositories", value: "CREATED_AT" },
	{ id: 2, label: "Lowest rated repositories", value: "RATING_AVERAGE:ASC" },
	{ id: 1, label: "Highest rated repositories", value: "RATING_AVERAGE:DESC" },
];
