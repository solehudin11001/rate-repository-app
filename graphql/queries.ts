import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection,  searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          fullName
        }
      }
    }
  }
`;
