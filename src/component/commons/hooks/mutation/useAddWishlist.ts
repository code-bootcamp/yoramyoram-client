import { gql } from "@apollo/client";

export const ADD_WISHLIST = gql`
  mutation addWishlist($createProductWishInput: CreateProductWishInput!) {
    addWishlist(createProductWishInput: $createProductWishInput)
  }
`;
