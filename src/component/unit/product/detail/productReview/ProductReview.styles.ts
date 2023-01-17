import { FormOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
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
    max-width: 1000px;
  }
`;

export const ReviewHeader = styled.header`
  border-bottom: 1px solid #d9d9d9;
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
  border-bottom: 1px solid #d9d9d9;
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

  & > p:first-child {
    margin-bottom: 8px;
    font-weight: 500;
  }
  & > p:last-child {
    color: #707070;
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
  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-footer {
    text-align: center;
    background: transparent;
    margin-top: 10px;
  }
  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-header {
    background-color: transparent;
  }
`;

export const ContentBox = styled.div`
  padding: 0 30px 30px 30px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
  padding: 10px;
  border: 1px solid #b6b6b6;
  margin: 10px 0;
  outline: none;
`;

export const PrdName = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const PrdUser = styled.p`
  font-size: 15px;
  color: #707070;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;

export const Cancel = styled.button`
  border: 1px solid #b7b7b7;
  width: 100px;
  padding: 5px 0;
  font-size: 15px;
  cursor: pointer;
`;
export const Ok = styled.button`
  background-color: #30640a;
  color: #fcfbfa;
  width: 100px;
  padding: 5px 0;
  font-size: 15px;
  cursor: pointer;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const WriteIcon = styled(FormOutlined)`
  margin-right: 10px;
`;
export const ModalTitle = styled.h3``;

export const DeleteTxt = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ModalDeleteBox = styled(Modal)`
  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal .ant-modal-footer {
    display: none;
  }
  &:where(.css-dev-only-do-not-override-9ntgx0).ant-modal {
    width: 500px !important;
  }
`;
