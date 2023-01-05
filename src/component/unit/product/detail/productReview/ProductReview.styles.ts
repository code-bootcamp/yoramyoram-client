import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import * as mq from "../../../../../commons/styles/mediaQueries";

export const ReviewWrapper = styled.div`
  max-width: 1300px;
  margin: 34px auto;
  ${mq.mobile} {
    padding: 0 18px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
  ${mq.tablet} {
    padding: 0 18px;
  }
  ${mq.laptop} {
    padding: 0 18px;
  }
`;

export const ReviewHeader = styled.header`
  border-bottom: 1px solid #aaaaaa;
`;

export const HeaderText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 16px;
  color: #727272;
  padding-bottom: 14px;
`;

export const ReviewWriteBtn = styled.button`
  width: 146px;
  padding: 14px 0;
  background-color: #30640a;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  font-family: "Noto Sans KR";
  cursor: pointer;
`;

export const ReviewInnerWrapper = styled.div`
  padding: 22px 0 20px;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans KR";
  justify-content: space-between;
`;

export const ReviewInner = styled.div`
  width: 100%;
`;

export const ReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ReviewTopLeft = styled.div``;
export const ReviewTopRight = styled.div``;

export const OptionText = styled.div`
  color: #707070;
  padding: 4px 0 14px;
`;

export const ReviewText = styled.div`
  color: #222222;
  padding-bottom: 12px;
  width: 90%;
  line-height: 1.3;
  word-break: keep-all;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
`;

export const ReviewCommentBtn = styled.div`
  color: #30640a;
  & > button {
    background: none;
    border: none;
    font-family: "Noto Sans KR";
    cursor: pointer;
  }
`;

export const ReviewBtnWrapper = styled.div`
  padding-bottom: 57px;
  display: flex;
  justify-content: end;
  color: #8b8b8b;
  * > svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
  ${mq.mobile} {
    padding-bottom: 30px;
  }
  ${mq.mobileL} {
    padding-bottom: 30px;
  }
`;
export const ReviewDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;
export const ReviewRelatedWrapper = styled.div`
  color: #222222;

  & > div:first-child {
    padding-bottom: 7px;
  }
`;

export const ListPagenation = styled.div`
  margin-top: 4.3%;
  text-align: center;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  padding: 0 1%;
  /* color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")}; */
  /* font-weight: ${(props: IPageProps) =>
    props.isActive ? "bold" : "normal"}; */
  /* cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")}; */
  cursor: pointer;
`;

export const PageNationLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
`;

export const PageNationRightArrow = styled(RightOutlined)`
  cursor: pointer;
`;
