import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQuerySearchProductsArgs,
} from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

export const SEARCH_PRODUCTS = gql`
  query searchProducts($word: String!, $page: Float!) {
    searchProducts(page: $page, word: $word) {
      product_id
      name
      price
      productImages{
        url
      }
    }
  }
`;

export const useSearchProducts = (word: string) => {
  const [startPage, setStartPage] = useState(1);
  const { data } = useQuery<
    Pick<IQuery, "searchProducts">,
    IQuerySearchProductsArgs
  >(SEARCH_PRODUCTS, {
    variables: {
      page: 1,
      word: word,
    },
  });

  // const [keyword, setKeyword] = useState("");
  // const getDebounce = _.debounce((value) => {
  //   void refetch({ word: value, page: 1 });
  //   setKeyword(value);
  // }, 500);

  // const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   getDebounce(event.currentTarget.value);
  //   console.log(event.currentTarget.value);
  // };

  const mySecretCode = uuidv4();

  return {
    // keyword,
    data,
    // onChangeSearch,
    mySecretCode,
  };
};
