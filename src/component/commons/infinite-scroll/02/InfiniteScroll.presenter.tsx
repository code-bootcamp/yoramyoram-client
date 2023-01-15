import InfiniteScroll from "react-infinite-scroller";
import * as S from "./InfiniteScroll.styles";
interface IProps {
  children: string | JSX.Element | JSX.Element[];
  onLoadMore: () => void;
}

export default function InfiniteScrollUI(props: IProps) {
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <S.InfiniteBox
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.children}
      </S.InfiniteBox>
    </div>
  );
}
