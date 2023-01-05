import { gql, useQuery } from "@apollo/client";
export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      product_id
      name
      price
      description
      etc1Name
      etc1Value
      etc2Name
      etc1Value
      detailContent
      productCategory {
        category_id
        category
      }
    }
  }
`;

export const useFetchProducts = () => {
  const { data } = useQuery(FETCH_PRODUCTS);

  return {
    data,
  };
};
