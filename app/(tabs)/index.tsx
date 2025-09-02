import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/header";
import Main from "../../components/ui/main";
import Text from "../../components/ui/text";
import { ArgumentsProvider } from "../../contexts/arguments-context";
import { REPOSITORIES } from "../../graphql/queries";
import type { ArgumentsQuery, Repositories } from "../../types";

export default function Tab() {
	const [argumentsQuery, setArgumentsQuery] = useState<ArgumentsQuery>({
		orderBy: "CREATED_AT",
		orderDirection: "DESC",
		searchKeyword: "",
	});
	const { data, error } = useQuery<Repositories>(REPOSITORIES, {
		fetchPolicy: "cache-and-network",
		variables: argumentsQuery,
	});

	if (error) {
		console.log("Error fetching repositories: ", error);
	}

	const repositories = data
		? data.repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<ArgumentsProvider value={setArgumentsQuery}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<Main>
					<Header />
					<FlatList
						data={repositories}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <Text>{item.fullName}</Text>}
					/>
				</Main>
			</TouchableWithoutFeedback>
		</ArgumentsProvider>
	);
}
