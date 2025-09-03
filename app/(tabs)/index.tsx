import { useState } from "react";
import Header from "../../components/header";
import Repositories from "../../components/repositories";
import ScreenWrapper from "../../components/ui/screen-wrapper";
import { ArgumentsProvider } from "../../contexts/arguments-context";
import { REPOSITORIES } from "../../graphql/queries";
import useRepositories from "../../hooks/useRepositories";
import type { ArgumentsQuery } from "../../types";

export default function Tab() {
	const [argumentsQuery, setArgumentsQuery] = useState<ArgumentsQuery>({
		orderBy: "CREATED_AT",
		orderDirection: "DESC",
		searchKeyword: "",
	});

	const { data } = useRepositories(REPOSITORIES, argumentsQuery);

	return (
		<ArgumentsProvider value={setArgumentsQuery}>
			<ScreenWrapper>
				<Header />
				<Repositories data={data} />
			</ScreenWrapper>
		</ArgumentsProvider>
	);
}
