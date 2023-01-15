import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      comment_id
      title
      star
      content
      createdAt
      isDeleted
      user {
        name
      }
      product {
        name
      }
    }
  }
`;
