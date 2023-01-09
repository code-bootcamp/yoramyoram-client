import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
      productCategory {
        category_id
        category
      }
    }
  }
`;

export const useFetchProducts = () => {
  const router = useRouter;
  // 코드젠 업데이트 되면 타입추가s
  const { data } = useQuery(FETCH_PRODUCTS, {
    variables: {
      page: 1,
    },
  });
  return {
    data,
  };
};
