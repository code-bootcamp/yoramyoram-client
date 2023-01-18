import { ApolloQueryResult } from "@apollo/client";
import { Category, Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../commons/types/generated/types";
import Pagination01UI from "./Pagination01.presenter";
// import { ApolloQueryResult} from "@apollo/client/core"

interface IProps {
  selected: string;
  count: number | undefined;
  category: string;
  refetch: (
    variables?: Partial<IQueryFetchProductsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  activedPage: number;
  setActivedPage: Dispatch<SetStateAction<number>>;
  // refetch: Partial<IQueryFetchProductsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts" >>>;
}

export default function Pagination01(props: IProps) {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 12) : 0;
  // const Select = props.selected;
  const { setActivedPage, activedPage } = props;

  useEffect(() => {
    setStartPage(1);
    setActivedPage(1);
  }, [props.category]);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });

    //FIXME:sort
    // if (Select === "sortByCreatedAtASC") {
    //   void props.refetch({ page: activedPage });
    // } else if (Select === "sortByPriceASC") {
    //   void props.priceASCRefetch({ page: activedPage });
    // } else if (Select === "sortByPriceDESC") {
    //   void props.priceDESCRefetch({ page: activedPage });
    // } else if (Select === "sortByCommentsASC") {
    //   void props.commentsASCRefetch({ page: activedPage });
    // } else if (Select === "sortByCommentsDESC") {
    //   void props.commentsDESCRefetch({ page: activedPage });
    // }
    // void props.priceASCRefetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivedPage(startPage - 5);
    void props.refetch({ page: startPage - 5 });
    // console.log("이전");
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivedPage(startPage + 5);
      void props.refetch({ page: startPage + 5 });
    }
    // console.log("다음");
  };

  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
