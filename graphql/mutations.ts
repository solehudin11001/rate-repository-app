import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGNIN = gql`
  mutation($user: CreateUserInput) {
    createUser(user: $user) {
      createdAt
      id
    }
  }
`;

export const REVIEW = gql`
  mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      rating
      text
      user {
        id
        username
      }
      createdAt
    }
  }
`;
