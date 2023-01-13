import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchProductsCountArgs,
} from "../../../../commons/types/generated/types";
import Pagination03UI from "./Pagination03.presenter";

interface IProps {
  selected: string;
  count: number;
  category: string;
  refetch: (
    variables?: Partial<IQueryFetchProductsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProductCartCount">>>;
  page: string;
  // refetch: Partial<IQueryFetchProductsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts" >>>;
}

export default function Pagination03(props: IProps) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 5) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivedPage(startPage - 5);
    void props.refetch({ page: startPage - 5 });
    console.log("이전");
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivedPage(startPage + 5);
      void props.refetch({ page: startPage + 5 });
    }
    console.log("다음");
  };

  return (
    <Pagination03UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
