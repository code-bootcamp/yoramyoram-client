import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($cateId: String, $page: Float!) {
    fetchProducts(cateId: $cateId, page: $page) {
      product_id
      name
      price
      description
      commentCount
      wishListCount
      etc1Name
      etc1Value
      etc2Name
      etc2Value
      detailContent
      productImages {
        productImage_id
        url
      }
    }
  }
`;

export const FETCH_PRODUCTS_COUNT = gql`
  query fetchProductsCount($cateId: String) {
    fetchProductsCount(cateId: $cateId)
  }
`;
