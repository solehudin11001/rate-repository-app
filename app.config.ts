import "dotenv/config";
import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	slug: "rate-repository-app",
	name: "rate-repository-app",
	extra: {
		env: process.env.GRAPHQL_API_URL,
	},
});
