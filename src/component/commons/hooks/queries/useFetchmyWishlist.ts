import { gql } from "@apollo/client";

export const FETCH_MY_WISHLIST = gql`
  query fetchmyWishlist {
    fetchmyWishlist {
      productwishlist_id
      isDib
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
