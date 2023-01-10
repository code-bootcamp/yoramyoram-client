import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      title
      star
      content
      createdAt
    }
  }
`;

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      title
      star
      content
      createdAt
      user {
        name
      }
      product {
        name
        etc1Name
        etc1Value
        etc2Name
        etc1Value
      }
    }
  }
`;
