import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      product_id
      name
      price
      wishListCount
      commentCount
      description
      etc1Name
      etc1Value
      etc2Name
      etc2Value
      detailContent
      createdAt
      productImages {
        productImage_id
        url
      }
      productCategory {
        category_id
        category
      }
      productWishlist {
        isDib
      }
    }
  }
`;
