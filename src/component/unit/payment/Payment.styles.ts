import styled from "@emotion/styled";
import { Modal } from "antd";
import * as mq from "../../../commons/styles/mediaQueries";
import DaumPostcode from "react-daum-postcode";
import { CloseOutlined } from "@ant-design/icons";

export const Wrapper = styled.form`
  padding: 150px 0;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  ${mq.laptop} {
    padding: 0 50px;
  }
  ${mq.tablet} {
    padding: 100px 50px;
  }
  ${mq.mobileL} {
    padding: 100px 18px;
  }
  ${mq.mobile} {
    padding: 100px 18px;
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
  & > img {
    width: 100%;
  }
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
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
`;

// 배송지 정보 박스
export const ShippingInfoBox = styled.div`
  border-top: 2px solid #707070;
  border-bottom: 2px solid #707070; ;
`;

export const ShippingInfoTitle = styled.p`
  font-size: 16px;
  width: 20%;
  ${mq.mobile} {
    width: 100%;
    padding-bottom: 10px;
  }
  ${mq.mobileL} {
    width: 100%;
    padding-bottom: 10px;
  }
`;
export const RecipientBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaaaaa;
  padding: 19px 21px;

  ${mq.mobile} {
    flex-direction: column;
  }
  ${mq.mobileL} {
    flex-direction: column;
  }
`;

export const DiscountBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaaaaa;
  padding: 19px 21px;

  ${mq.mobile} {
  }
  ${mq.mobileL} {
  }
`;
// 모바일때문에 만듦
export const DiscountMobileBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaaaaa;
  padding: 19px 21px;

  ${mq.mobile} {
    flex-direction: column;
  }
  ${mq.mobileL} {
    flex-direction: column;
  }
`;

export const DiscountPointBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  ${mq.mobile} {
    padding-bottom: 10px;
  }
  ${mq.mobileL} {
    padding-bottom: 10px;
  }
`;

export const DiscountInfoTitle = styled.p`
  font-size: 16px;
  max-width: 182px;
  width: 100%;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
`;

export const RecipientInput = styled.input`
  max-width: 410px;
  width: 100%;
  padding: 6px;
`;

export const PhoneNumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  ${mq.mobile} {
    max-width: 297px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${mq.mobileL} {
    max-width: 297px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const PhoneNumberSelect = styled.select`
  width: 100px;
  padding: 6px;
  margin-right: 10px;
  ${mq.mobile} {
    width: 70px;
  }

  ${mq.mobileL} {
    width: 70px;
  }
`;

export const PhoneNumberInput = styled.input`
  width: 100px;
  padding: 6px;
  margin-right: 10px;
`;

export const AddressBox = styled.div`
  width: 80%;
  ${mq.mobile} {
    width: 100%;
  }

  ${mq.mobileL} {
    width: 100%;
  }
`;

export const ZipcodeBox = styled.div`
  padding-bottom: 10px;
`;
export const ZipcodeInput = styled.input`
  max-width: 328px;
  width: 100%;
  padding: 6px;
  ${mq.mobile} {
    max-width: 30%;
  }

  ${mq.mobileL} {
    max-width: 30%;
  }
`;
export const ZipcodeBtn = styled.button`
  background: #30640a;
  border: none;
  color: #ffffff;
  padding: 8px 25px;
  cursor: pointer;
  ${mq.mobile} {
    padding: 8px 24px;
  }

  ${mq.mobileL} {
    padding: 8px 24px;
  }
`;

export const AddressInput = styled.input`
  padding: 8px;
  max-width: 458px;
  width: 100%;
  ${mq.mobile} {
    margin-bottom: 10px;
  }

  ${mq.mobileL} {
    margin-bottom: 10px;
  }
`;
export const AddressDetailInput = styled.input`
  padding: 8px;
`;

export const ProductWapper = styled.div`
  padding: 59px 0;
`;

export const Bargan = styled.div``;

export const ExpectedPrice = styled.div`
  font-size: 20px;
`;

export const YoramPointInput = styled.input`
  padding: 6px;
  max-width: 246px;
  width: 100%;
  border: 1px solid #aaaaaa;
`;

export const YoramPointUnit = styled.div`
  padding: 0 37px 0 10px;

  ${mq.mobile} {
    padding: 0 0 0 10px;
  }
  ${mq.mobileL} {
    padding: 0 0 0 10px;
  }
`;

export const UsePointCheck = styled.input`
  font-size: 15px;
  margin-right: 5px;
`;
export const RestPoint = styled.span`
  margin-left: 24px;
  font-size: 14px;
`;
export const SumProductBox = styled.div`
  border-bottom: 1px solid #b7b7b7;
  margin-bottom: 20px;
`;

export const SumProductPrice = styled.p`
  font-weight: 600;
  font-size: 20px;
  & > span {
    font-size: 15px;
    font-weight: 400;
    color: #222;
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
    margin-bottom: 40px;
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
  & > img {
    width: 100%;
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
`;

export const Delete = styled.button`
  justify-content: flex-start;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const DeletePoint = styled(CloseOutlined)``;
