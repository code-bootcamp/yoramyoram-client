import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQuerySortByPriceDescArgs,
} from "../../../../commons/types/generated/types";

export const SORT_BY_PRICE_DESC = gql`
  query sortByPriceDESC($page: Float!) {
    sortByPriceDESC(page: $page) {
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

export const usePriceDESC = () => {
  const { data: PriceDESC, refetch: PriceDESCRefetch } = useQuery<
    Pick<IQuery, "sortByPriceDESC">,
    IQuerySortByPriceDescArgs
  >(SORT_BY_PRICE_DESC, {
    variables: {
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });
  return { PriceDESC, PriceDESCRefetch };
};
