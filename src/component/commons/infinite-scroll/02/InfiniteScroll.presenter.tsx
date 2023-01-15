import InfiniteScroll from "react-infinite-scroller";
import * as S from "./InfiniteScroll.styles";
export default function InfiniteScrollUI(props) {
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
