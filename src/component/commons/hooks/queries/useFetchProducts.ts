import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float!) {
    fetchProducts(page: $page) {
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
      productCategory {
        category_id
        category
      }
    }
  }
`;

export const FETCH_PRODUCTS_COUNT = gql`
  query {
    fetchProductsCount
  }
`;
