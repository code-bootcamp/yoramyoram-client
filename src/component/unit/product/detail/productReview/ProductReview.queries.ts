import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      comment_id
      star
      content
      createdAt
      isDeleted
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation udpateComment(
    $commentId: String!
    $updateCommentInput: UpdateCommentInput!
  ) {
    udpateComment(
      commentId: $commentId
      updateCommentInput: $updateCommentInput
    ) {
      comment_id
      star
      content
      createdAt
      isDeleted
    }
  }
`;

export const FETCH_COMMENTS = gql`
  query fetchComments($productId: String!, $page: Float!) {
    fetchComments(productId: $productId, page: $page) {
      comment_id
      star
      content
      createdAt
      user {
        name
        id
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($commentId: String!) {
    fetchComment(commentId: $commentId) {
      comment_id
      star
      content
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;

export const FETCH_COMMENTS_COUNT = gql`
  query fetchCommentsCount($productId: String!) {
    fetchCommentsCount(productId: $productId)
  }
`;
