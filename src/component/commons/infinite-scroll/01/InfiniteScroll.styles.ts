import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import * as mq from "../../../../commons/styles/mediaQueries";

export const InfiniteScrollWrapper = styled.div`
  height: 500px;
  overflow: auto;
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
  ${mq.tablet} {
    display: none;
  }
`;

export const InfiniteBox = styled(InfiniteScroll)`
  border-bottom: 2px solid #707070;
`;
