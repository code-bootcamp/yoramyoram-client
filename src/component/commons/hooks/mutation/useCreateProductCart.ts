import { gql } from "@apollo/client";

export const CREATE_PRODUCT_CART = gql`
  mutation createProductCart(
    $productId: String!
    $etc1Name: String
    $etc1Value: String
    $etc2Name: String
    $etc2Value: String
  ) {
    createProductCart(
      productId: $productId
      etc1Name: $etc1Name
      etc1Value: $etc1Value
      etc2Name: $etc2Name
      etc2Value: $etc2Value
    ) {
      id
      quantity
      etc1Name
      etc1Value
      etc2Name
      etc2Value
    }
  }
`;
