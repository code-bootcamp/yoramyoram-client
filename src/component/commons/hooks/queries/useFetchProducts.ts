import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../commons/types/generated/types";
export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float!) {
    fetchProducts(page: $page) {
      product_id
      name
      price
      description
      etc1Name
      etc1Value
      etc2Name
      etc1Value
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

export const useFetchProducts = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables: {
      page: 1,
    },
  });

  return {
    data,
  };
};
