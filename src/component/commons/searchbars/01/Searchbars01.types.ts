import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<IQueryFetchProductsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
  onChnageSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
