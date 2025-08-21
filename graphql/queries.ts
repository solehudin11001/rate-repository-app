import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragment";

export const REPOSITORIES = gql`
  query($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export const REPOSITORY_DETAILS = gql`
  query($id: ID!) {
    repository(id: $id) {
      ...RepositoryFragment
      url
      reviews {
        edges {
          node {
            rating
            text
            createdAt
            user {
              username
              id
            }
            id
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
