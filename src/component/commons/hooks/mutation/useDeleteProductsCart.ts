import { gql } from "@apollo/client";

export const DELETE_PRODUCT_CART = gql`
  mutation deleteProductCart($productCartId: String!) {
    deleteProductCart(productCartId: $productCartId)
  }
`;
