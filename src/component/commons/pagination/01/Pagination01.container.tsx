import { MouseEvent, useState } from "react";
import Pagination01UI from "./Pagination01.presenter";

export default function Pagination01(props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 12) : 0;

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
