import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CATEGORY = gql`
  query fetchCategory(#cateId: String!, $page: Float!) {
    fetchCategory(cateId: $cateId, page: $page) {
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


export const useFetchProducts = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_CATEGORY, {
    variables: {
      page: 1,
    },
  });

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    // console.log(event.currentTarget.id);
  };
  return {
    data,
    refetch,
    onClickPage,
  };
};
