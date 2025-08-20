import Header from "@/components/header";
import Repositorylist from "@/components/repository-list";
import { REPOSITORIES } from "@/graphql/queries";
import { useRepositories } from "@/hooks/useRepositories";
import type { RepositoriesType } from "@/types";
import { useState } from "react";

export default function Index() {
	const [sortedBy, setSortedBy] = useState("CREATED_AT:DESC");
	const [order, direction] = sortedBy.split(":");

	const { repositories: data, loading } = useRepositories<RepositoriesType>(
		REPOSITORIES,
		{
			orderBy: order,
			orderDirection: direction,
		},
	);

	return (
		<Repositorylist data={data} loading={loading}>
			<Header sortedBy={sortedBy} setSortedPicker={setSortedBy} />
		</Repositorylist>
	);
}
