import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ReviewWrapper = styled.div`
  max-width: 1300px;
  margin: 2% auto;
  /* margin: 0 auto; */
`;

export const ReviewHeader = styled.header`
  border-bottom: 1px solid #aaaaaa;
`;

export const HeaderText = styled.div`
  /* font-family:NotoSansKR-Regular */
  font-size: 1rem;
  color: #727272;
  padding-bottom: 1%;
`;

export const ReviewWriteBtn = styled.button`
  width: 11.3%;
  padding: 1% 0;
  background-color: #30640a;
  color: #ffffff;
  font-size: 1.1rem;
  border: none;
  /* font-family:NotoSansKR-Medium */
  cursor: pointer;
`;

export const ReviewInnerWrapper = styled.article`
  padding: 1.7% 0 1.6%;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionText = styled.div`
  font-size: 1rem;
  color: #707070;
  padding: 0.5% 0 1.7%;
  /* font-family:  NotoSansKR-Regular */
`;

export const ReviewText = styled.div`
  font-size: 1rem;
  color: #222222;
  padding-bottom: 1.4%;
  /* font-family:  NotoSansKR-Regular */
`;

export const ReviewCommentBtn = styled.div`
  font-size: 1rem;
  color: #30640a;
  & > button {
    background: none;
    border: none;
    /* font-family: "NotoSansKR-Bold"; */
    cursor: pointer;
  }
`;

export const ReviewBtnWrapper = styled.div`
  /* padding-bottom: 57px; */
  padding-bottom: 70%;
  display: flex;
  justify-content: end;
  color: #8b8b8b;
  * > svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const ReviewRelatedWrpper = styled.div`
  font-size: 1rem;
  color: #222222;
  /* font-family: NotoSansKR-Regular */

  & > div:first-child {
    /* padding-bottom: 6px; */
    padding-bottom: 10%;
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
