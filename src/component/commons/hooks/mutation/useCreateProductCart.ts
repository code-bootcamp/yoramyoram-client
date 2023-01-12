import { gql } from "@apollo/client";

export const CREATE_PRODUCT_CART = gql`
  mutation createProductCart(
    $productId: String!
    $etc1Value: String
    $etc2Value: String
  ) {
    createProductCart(
      productId: $productId
      etc1Value: $etc1Value
      etc2Value: $etc2Value
    ) {
      id
      quantity
      # etc1Value
      # etc2Value
    }
  }
`;
