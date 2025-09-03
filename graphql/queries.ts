import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

export const REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection,  searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
