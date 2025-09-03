import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFragment on Repository {
    id
    fullName
    language
    ownerAvatarUrl
    description
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  } 
`;
