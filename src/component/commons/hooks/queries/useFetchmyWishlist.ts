import { gql } from "@apollo/client";

export const FETCH_MY_WISHLIST = gql`
  query fetchmyWishlist($page: Float!) {
    fetchmyWishlist(page: $page) {
      productwishlist_id
      isDib
      user {
        id
        name
      }
      product {
        product_id
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
