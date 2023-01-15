import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`;
