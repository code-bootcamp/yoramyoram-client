import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQuerySortByPriceAscArgs,
} from "../../../../commons/types/generated/types";

export const SORT_BY_PRICE_ASC = gql`
  query sortByPriceASC($page: Float!) {
    sortByPriceASC(page: $page) {
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

export const usePriceASC = () => {
  const { data: PriceASC, refetch: PriceASCRefetch } = useQuery<
    Pick<IQuery, "sortByPriceASC">,
    IQuerySortByPriceAscArgs
  >(SORT_BY_PRICE_ASC, {
    variables: {
      page: 1,
    },
    fetchPolicy: "network-only",
  });
  return { PriceASC, PriceASCRefetch };
};
