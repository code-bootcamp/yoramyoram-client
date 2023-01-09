import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export const Form = styled.form`
  width: 100%;
`;

export const JoinTypeBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const JoinTypeInput = styled.input`
  margin-right: 20px;
`;

export const Label = styled.label`
  width: 15%;
  font-weight: 500;
  color: #30640a;
  font-size: 16px;
  ${mq.mobile} {
    width: 100%;
    margin-bottom: 10px;
    display: block;
  }
  ${mq.mobileL} {
    width: 100%;
    margin-bottom: 10px;
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 10% 20%;
  background-color: #fcfbfa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  ${mq.mobile} {
    padding: 30% 18px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #30640a;
  line-height: 2;
  align-items: baseline;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #30640a;
  font-family: "NewYork";
`;

export const TitleCon = styled.p`
  color: rgb(127 139 118);
  margin-left: 9px;
`;

export const PhoneNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #30640a;
  padding-top: 20px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;
export const PhoneWrap = styled.div`
  display: flex;
  ${mq.mobile} {
    margin-bottom: 10px;
  }
  ${mq.mobileL} {
    margin-bottom: 10px;
  }
`;
export const PhoneNumber2 = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mq.mobile} {
    width: 100%;
    display: block;
  }
  ${mq.mobileL} {
    width: 100%;
    display: block;
  }
`;

export const PhoneSelect = styled.select`
  width: 30%;
  border: 1px solid #30640a;
  border-radius: 4px;
  padding: 15px 10px;
  background: transparent;
  ${mq.mobile} {
    width: 30%;
  }
  ${mq.mobileL} {
    width: 30%;
  }
`;

export const PhoneInput = styled.input`
  border: 1px solid #30640a;
  border-radius: 4px;
  margin-left: 10px;
  padding: 15px 10px;
  width: 33%;
  ${mq.mobile} {
    width: 33%;
  }
  ${mq.mobileL} {
    width: 33%;
  }
`;

export const JoinButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: #30640a;
  font-size: 20px;
  padding: 10px 50px;
  border: 1px solid #30640a;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #30640a;
    color: #fcfbfa;
  }
`;

export const JoinButtonWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
`;

export const SearchButton = styled.input`
  width: 148px;
  height: 41px;
  background-color: #30640a;
  color: #fcfbfa;
  font-size: 18px;
  border: none;
  border-radius: 6px;
`;

export const CertNumber = styled.button`
  width: 120px;
  padding: 15px;
  margin-left: 10px;
  border-radius: 4px;
  border: none;
  color: #fcfbfa;
  font-size: 15px;
  background-color: #30640a;
  cursor: pointer;
  ${mq.mobile} {
    width: 100%;
    margin-left: 0;
  }
  ${mq.mobileL} {
    width: 100%;
    margin-left: 0;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #30640a;
  margin-top: 20px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;

export const CertNumberInput = styled.input`
  width: 30%;
  padding: 15px;
  border: 1px solid #30640a;
  border-radius: 4px;
  ${mq.mobile} {
    width: calc(100% - 110px);
  }
  ${mq.mobile} {
    width: calc(100% - 110px);
  }
`;

export const CertNumberButton = styled.button`
  width: 100px;
  padding: 15px;
  margin-left: 10px;
  border-radius: 4px;
  background-color: #30640a;
  color: #ffff;
  border: none;
  color: #fcfbfa;
  font-size: 15px;
  cursor: pointer;
`;

export const AddressNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #30640a;
  margin-top: 37px;
`;

export const AddressNumberInput = styled.input`
  width: 30%;
  padding: 15px;
  border: 1px solid #30640a;
  border-radius: 4px;
  ${mq.mobile} {
    width: calc(100% - 130px);
  }
  ${mq.mobile} {
    width: calc(100% - 130px);
  }
`;

export const AddressNumberButton = styled.button`
  width: 120px;
  padding: 15px;
  margin-left: 10px;
  border-radius: 4px;
  background-color: #30640a;
  border: none;
  color: #fcfbfa;
  font-size: 15px;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  & > label {
    ${mq.mobile} {
      display: none;
    }
    ${mq.mobileL} {
      display: none;
    }
  }
`;

export const AddressInputBox = styled.div`
  width: 80%;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobile} {
    width: 100%;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #30640a;
  padding: 15px;
  font-size: 15px;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobile} {
    width: 100%;
  }
`;
export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const CountDown = styled.div`
  padding-left: 10px;

  ${mq.mobile} {
    padding-top: 10px;
    margin-left: -10px;
  }
  ${mq.mobile} {
    padding-top: 10px;
    margin-left: -10px;
  }
`;
