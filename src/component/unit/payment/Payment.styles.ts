import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Wrapper = styled.section`
  padding: 150px 0;
  max-width: 1300px;
  margin: 0 auto;
  ${mq.laptop} {
    padding: 0 50px;
  }
  ${mq.tablet} {
    padding: 0 50px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
  ${mq.mobile} {
    padding: 0 18px;
  }
`;
export const Title = styled.h1`
  font-family: "NewYork";
  color: #306415;
  font-size: 60px;
  text-align: center;
  margin-bottom: 80px;
`;

export const FlexBoxWrap = styled.div`
  display: flex;
  gap: 30px;
`;
export const Left = styled.div`
  width: 75%;
`;
export const Right = styled.div`
  width: 25%;
`;
export const SubTitle = styled.h5`
  font-size: 20px;
  color: #222;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Table = styled.table`
  width: 100%;
  color: #222;
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
`;
export const ImgWrap = styled.div`
  width: 20%;
  margin-right: 30px;
  & > img {
    width: 100%;
  }
`;
export const PrdDetail = styled.div``;
export const Name = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
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
`;
export const RecipientBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaaaaa;
  padding: 19px 21px;
`;

export const RecipientInput = styled.input`
  width: 410px;
  padding: 6px;
`;

export const PhoneNumberSelect = styled.select`
  width: 100px;
  padding: 6px;
  margin-right: 10px;
`;

export const PhoneNumberInput = styled.input`
  width: 100px;
  margin: 0 10px;
  padding: 6px;
`;

export const AddressBox = styled.div`
  width: 80%;
`;

export const ZipcodeBox = styled.div`
  padding-bottom: 10px;
`;
export const ZipcodeInput = styled.input`
  width: 328px;
  padding: 6px;
`;
export const ZipcodeBtn = styled.button`
  background: #30640a;
  border: none;
  color: #ffffff;
  padding: 8px 25px;
  cursor: pointer;
`;

export const AddressInput = styled.input`
  padding: 8px;
  max-width: 458px;
  width: 100%;
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
  width: 246px;
  border: 1px solid #aaaaaa;
`;

export const YoramPointUnit = styled.span`
  padding: 0 37px 0 10px;
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
