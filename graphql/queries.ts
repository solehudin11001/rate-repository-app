import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragment";

export const REPOSITORIES = gql`
  query Repository($first: Int, $after: String, $searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(first: $first, after: $after, searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
      totalCount                                   
      edges {
        node {
          ...RepositoryFragment
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export const REPOSITORY_DETAILS = gql`
  query RepositoryDetails($first: Int, $after: String, $id: ID!) {
    repository(id: $id) {
      ...RepositoryFragment
      url
      reviews(first: $first, after: $after) {
        totalCount
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
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
