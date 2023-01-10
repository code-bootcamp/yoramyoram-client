import { gql } from "@apollo/client";

export const CREATE_PRODUCT_CART = gql`
  mutation createProductCart($productId: String!) {
    createProductCart(productId: $productId) {
      id
      quantity
    }
  }
`;
