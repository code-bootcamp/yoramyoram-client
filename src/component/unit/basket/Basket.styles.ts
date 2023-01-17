import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Wrapper = styled.section`
  padding: 150px 0;
  max-width: 1300px;
  margin: 0 auto;
  ${mq.laptop} {
    max-width: 1000px;
  }
  ${mq.tablet} {
    padding: 120px 18px 80px 18px;
  }
  ${mq.mobileL} {
    padding: 120px 18px 80px 18px;
  }
  ${mq.mobile} {
    padding: 120px 18px 80px 18px;
  }
`;
export const Title = styled.h1`
  font-family: "NewYork";
  color: #306415;
  font-size: 60px;
  text-align: center;
  margin-bottom: 80px;
  ${mq.mobile} {
    font-size: 40px;
    margin-bottom: 50px;
  }
  ${mq.mobileL} {
    font-size: 50px;
  }
`;

export const FlexBoxWrap = styled.div`
  display: flex;
  gap: 30px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
  ${mq.tablet} {
    display: block;
  }
`;
export const Left = styled.div`
  width: 75%;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.tablet} {
    width: 100%;
  }
`;
export const Right = styled.div`
  width: 25%;
  position: sticky;
  top: 100px;
  height: 80px;
  ${mq.mobile} {
    width: 100%;
    position: inherit;
    height: auto;
  }
  ${mq.mobileL} {
    width: 100%;
    position: inherit;
    height: auto;
  }
  ${mq.tablet} {
    width: 100%;
    position: inherit;
    height: auto;
  }
`;
export const SubTitle = styled.h5`
  font-size: 20px;
  color: #222;
  font-weight: 500;
  margin-bottom: 20px;
  ${mq.mobile} {
    font-size: 17px;
    margin-bottom: 10px;
  }
  ${mq.mobileL} {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;
export const Table = styled.table`
  width: 100%;
  color: #222;
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
`;
export const Thead = styled.thead`
  border-top: 2px solid #707070;
  border-bottom: 1px solid #aaaaaa;
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #aaaaaa;
`;
export const Th = styled.th`
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  color: #222;
  vertical-align: middle;
  word-break: keep-all;
`;
export const Tbody = styled.tbody`
  border-bottom: 2px solid #707070;
`;
export const PrdTd = styled.td`
  display: flex;
  padding: 15px;
  align-items: center;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;
export const ImgWrap = styled.div`
  width: 20%;
  margin-right: 30px;
  height: 72px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mq.mobile} {
      height: 72px;
    }
    ${mq.mobileL} {
      height: 72px;
    }
  }

  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.tablet} {
    width: 100%;
  }
`;
export const PrdDetail = styled.div``;
export const Name = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
  ${mq.mobile} {
    margin-bottom: 8px;
  }
  ${mq.mobileL} {
    margin-bottom: 8px;
  }
`;
export const Option = styled.p`
  font-size: 15px;
`;
export const Td = styled.td`
  text-align: center;
  vertical-align: middle;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #b7b7b7;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #30640a;
    border: 1px solid #30640a;
    color: #fcfbfa;
  }
`;

export const RightTitle = styled.h5`
  font-size: 18px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #b7b7b7;
  padding: 20px 0;
  text-align: center;
  font-weight: 500;
`;
export const PriceWrap = styled.div`
  background-color: #f2f2f2;
  padding: 35px 20px;
`;
export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const BoxTitle = styled.p`
  font-size: 16px;
`;
export const SumPrice = styled.p`
  color: #306415;
  font-weight: 600;
  font-size: 20px;
  & > span {
    font-size: 15px;
    font-weight: 400;
    color: #222;
  }
`;
export const PointBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #5f5f5f;
  font-weight: 400;
`;
export const PointTitle = styled.p``;
export const Point = styled.p``;
export const PayButton = styled.button`
  background-color: #306415;
  border: none;
  color: #f2f2f2;
  padding: 15px 0;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
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

export const PayButtonMob = styled.button`
  background-color: #306415;
  border: none;
  color: #f2f2f2;
  padding: 10px 15px;
  width: 50%;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
export const GoShop = styled.button`
  margin-top: 20px;
  background-color: #222;
  border: none;
  color: #f2f2f2;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
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
export const GoShopMob = styled.button`
  background-color: #222;
  border: none;
  color: #f2f2f2;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  width: 50%;
`;

export const MobileBtnWrap = styled.div`
  display: none;
  ${mq.mobile} {
    display: flex;
  }
  ${mq.mobileL} {
    display: flex;
  }
  ${mq.tablet} {
    display: flex;
  }
`;

// MOBILE LIST

export const MobileList = styled.div`
  display: none;
  ${mq.mobile} {
    display: flex;
    gap: 15px;
    font-family: "Noto Sans KR";
    align-items: start;
    border-top: 1px solid #e8e8e8;
    color: #222;
    padding: 15px;
  }
  ${mq.mobileL} {
    display: flex;
    gap: 15px;
    font-family: "Noto Sans KR";
    align-items: start;
    border-top: 1px solid #e8e8e8;
    color: #222;
    padding: 15px;
  }
  ${mq.tablet} {
    display: flex;
    gap: 15px;
    font-family: "Noto Sans KR";
    align-items: start;
    border-top: 1px solid #e8e8e8;
    color: #222;
    padding: 15px;
  }
`;
export const PrdImg = styled.div`
  width: 30%;
  height: 120px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PrdInfoWrap = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: flex-start;
`;
export const PrdInfo = styled.div``;

export const PrdName = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 15px;
`;
export const PrdOption = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
`;

export const Quantity = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  & > span {
    font-size: 14px;
    font-weight: 300;
  }
  ${mq.mobile} {
    color: #30640a;
    font-size: 14px;
  }
  ${mq.mobileL} {
    color: #30640a;
    font-size: 14px;
  }
`;

export const Delete = styled.button`
  justify-content: flex-start;
`;
