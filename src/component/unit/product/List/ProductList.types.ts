import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsArgs,
  IQuerySearchProductsArgs,
} from "../../../../commons/types/generated/types";

export interface IProductListUIProps {
  refetch: (
    variables?: Partial<IQueryFetchProductsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  onChangeKeyword: (value: string) => void;
}
