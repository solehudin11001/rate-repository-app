import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/link-context";
import Constants from "expo-constants";
import { AuthStorage } from "./auth-storage";

const authStorage = new AuthStorage();

const asyncAuthLink = setContext(async () => {
	const accessToken = await authStorage.getAccessToken();

	return {
		headers: {
			Authorization: `Barear ${accessToken}`,
		},
	};
});

const httpLink = new HttpLink({
	uri: Constants.expoConfig?.extra?.env,
});

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: asyncAuthLink.concat(httpLink),
});
