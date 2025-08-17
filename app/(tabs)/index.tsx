import Repositorylist from "@/components/repository-list";
import { REPOSITORIES } from "@/graphql/queries";
import { useRepositories } from "@/hooks/useRepositories";
import type { RepositoriesType } from "@/types";

export default function Index() {
	const { repositories: data, loading } =
		useRepositories<RepositoriesType>(REPOSITORIES);

	return <Repositorylist data={data} loading={loading} />;
}
