import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import * as mq from "../../../../../commons/styles/mediaQueries";
import { Modal } from "antd";

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

// Modal custom

export const QQQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled(Modal)`
  width: 648px;
  min-height: 687px;
  .ant-modal-content {
    width: 648px;
  }

  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-content {
    position: relative;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    padding: 0;
  }

  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-header {
    color: rgba(0, 0, 0, 0.88);
    background: #383c34;
    border-radius: 8px 8px 0 0;
    margin-bottom: 8px;
  }
  .ant-modal-title {
    height: 56px;
    color: #ffffff;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    word-wrap: break-word;
    text-align: left;
    padding: 16px;
    font-family: "Noto Sans KR";
  }

  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-footer {
    text-align: center;
    background: transparent;
    margin-top: 10px;
  }
`;

export const ContentBox = styled.div`
  padding: 33px;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 200px 0;
`;
