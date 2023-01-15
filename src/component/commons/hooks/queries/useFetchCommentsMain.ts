import { gql } from "@apollo/client";

export const FETCH_COMMENTS_MAIN = gql`
  query fetchCommentsMain {
    fetchCommentsMain {
      content
      createdAt
      user {
        name
      }
    }
  }
`;
