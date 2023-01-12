import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQuerySearchProductsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_CART = gql`
  query fetchProductCart($page: Float!) {
    fetchProductCart(page: $page) {
      id
      quantity

      etc1Value
      etc2Value

      user {
        name
      }
      product {
        name
        price
        etc1Name
        etc1Value
        etc2Name
        etc2Value
        productImages {
          url
        }
      }
    }
  }
`;

export const FETCH_PRODUCTS_CART_COUNT = gql`
  query fetchProductCartCount {
    fetchProductCartCount
  }
`;

export const FETCH_PRODUCTS_CART_TOTAL_AMOUNT = gql`
  query fetchProductCartTotalAmount {
    fetchProductCartTotalAmount
  }
`;
