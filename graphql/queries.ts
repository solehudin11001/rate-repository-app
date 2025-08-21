import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragment";

export const REPOSITORIES = gql`
  query Repository($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
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
  query RepositoryDetails($id: ID!) {
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
  query Me($includeReviews: Boolean!) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            text
            repository {
              fullName
            }
            id
            rating
            createdAt
            repositoryId
          }
        }
      }
    }
  }
`;
