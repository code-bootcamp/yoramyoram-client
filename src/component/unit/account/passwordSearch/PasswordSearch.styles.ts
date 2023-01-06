import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const Background = styled.div`
  padding: 170px 0 140px;
  ${mq.laptop} {
    padding: 200px 18px 180px 18px;
  }
  ${mq.tablet} {
    padding: 200px 18px 180px 18px;
  }
  ${mq.mobileL} {
    padding: 150px 18px 120px 18px;
  }
  ${mq.mobile} {
    padding: 150px 18px 120px 18px;
  }
`;

export const Box = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

export const SearchTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 25px;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    font-size: 20px;
  }
  ${mq.mobile} {
    font-size: 20px;
  }
`;

export const SearchId = styled.p`
  color: #c4c4c4;
  cursor: pointer;
`;

export const SearchLine = styled.p`
  color: #c4c4c4;
  padding: 0 30px;
`;

export const SearchPa = styled.p`
  color: #30640a;
  font-weight: 700;
  cursor: pointer;
`;

export const MainCon = styled.form`
  max-width: 680px;
  padding: 40px 50px;
  border: 1px solid #707070;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 35px 0 28px;
  font-size: 20px;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    padding: 18px;
  }
  ${mq.mobile} {
    padding: 18px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 7px;
  color: #222222;
  ${mq.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 500;
  }
  ${mq.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: rgb(34 34 34);
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: rgb(34 34 34);
  margin-top: 18px;
`;

export const PhoneNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  align-items: center;
  margin-bottom: 15px;
  ${mq.mobileL} {
    display: flex;
    flex-direction: column;
  }
  ${mq.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const NumberBox = styled.div`
  width: calc(100% - 134px);
  ${mq.mobileL} {
    width: 100%;
    display: block;
    margin-top: 10px;
  }
  ${mq.mobile} {
    width: 100%;
    display: block;
    margin-top: 10px;
  }
`;

export const PhoneNumberBtnInputBox = styled.div`
  width: 80%;
  display: flex;
  ${mq.mobile} {
    width: 100%;
    display: block;
  }
  ${mq.mobileL} {
    width: 100%;
    display: block;
  }
`;
export const PhoneNumberInputBox = styled.div``;

export const PhoneNumber = styled.select`
  width: 29%;
  padding: 19px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  ${mq.mobileL} {
    width: 29%;
    padding: 10px;
  }
  ${mq.mobile} {
    width: 29%;
    padding: 10px;
  }
`;

export const PhoneNumber2 = styled.input`
  width: 30%;
  padding: 20px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-left: 15px;
  ${mq.mobileL} {
    width: 30%;
    padding: 10px;
  }
  ${mq.mobile} {
    width: 30%;
    padding: 10px;
  }
`;

export const CertNumber = styled.button`
  padding: 0 12px;
  border-radius: 4px;
  background-color: #30640a;
  font-size: 18px;
  color: #fcfbfa;
  border: none;
  cursor: pointer;
  width: 139px;
  margin-left: 10px;
  ${mq.mobileL} {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
    padding: 10px 0;
  }
  ${mq.mobile} {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
    padding: 10px 0;
  }
`;

export const PhoneSearch = styled.p`
  font-size: 16px;
  color: #222222;
  margin-top: 30px;
  font-weight: 600;
  line-height: 1.3;
  ${mq.mobileL} {
    font-size: 15px;
  }
  ${mq.mobile} {
    font-size: 15px;
  }
`;

export const PhoneOk = styled.button`
  margin-top: 27px;
  width: 100%;
  height: 67px;
  background-color: rgb(48 100 10);
  color: #fcfbfa;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 34px;
`;

export const LiCon = styled.li`
  font-size: 18px;
  color: rgb(34 34 34);
  margin-top: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    font-size: 15px;
  }
  ${mq.mobile} {
    font-size: 15px;
  }
`;

export const NoticeText = styled.li`
  max-width: 610px;
  padding-bottom: 21px;
  text-indent: -30px;
  padding-left: 29px;
  line-height: 1.5;

  ${mq.mobileL} {
    font-size: 15px;
    text-indent: -24px;
    padding-left: 24px;
    line-height: 1.5;
  }
  ${mq.mobile} {
    font-size: 15px;
    text-indent: -24px;
    padding-left: 24px;
    line-height: 1.5;
  }
`;

export const Label = styled.label`
  width: 20%;
  text-align: left;
  ${mq.mobileL} {
    font-size: 16px;
    width: 100%;
  }
  ${mq.mobile} {
    font-size: 16px;
    width: 100%;
  }
`;

export const SendNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SendNumber = styled.p`
  width: 70%;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
`;

export const CertificationBox = styled.div`
  position: relative;
`;

export const CountDown = styled.p`
  position: absolute;
  top: 38%;
  right: 20px;
  transform: translate(0, -50%);
  color: #707070;
  font-size: 16px;
  ${mq.mobile} {
    top: 53%;
    right: 15px;
  }
  ${mq.mobile} {
    top: 53%;
    right: 15px;
  }
`;
