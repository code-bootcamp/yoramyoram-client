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
  font-weight: 700;
  color: #30640a;
  cursor: pointer;
`;

export const SearchLine = styled.p`
  color: #c4c4c4;
  padding: 0 30px;
`;

export const SearchPa = styled.p`
  color: #c4c4c4;
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

export const NameIn = styled.input`
  width: 80%;
  padding: 21px 10px;
  border: 1px solid #b7b7b7;
  background-color: none;
  background: transparent;
  border-radius: 4px;
  ${mq.mobileL} {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
  ${mq.mobile} {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
`;

export const NameLabel = styled.label`
  width: 20%;
  text-align: left;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
`;

export const Phone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #222222;
  padding: 24px 0 0;
  ${mq.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  ${mq.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const PhoneTitle = styled.label`
  font-size: 20px;
  width: 20%;
  text-align: left;
  ${mq.mobileL} {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 10px;
    width: 100%;
  }
  ${mq.mobile} {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 10px;
    width: 100%;
  }
`;

export const PhoneNumber = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  & > span {
    padding: 0 12px;
    display: block;
  }
  ${mq.mobileL} {
    width: 100%;
    & > span {
      padding: 0 5px;
    }
  }
  ${mq.mobile} {
    width: 100%;
    & > span {
      padding: 0 5px;
    }
  }
`;

export const PhoneSelect = styled.select`
  max-width: 22%;
  width: 100%;
  padding: 21px 10px;
  border-radius: 4px;
  background: none;
  border: 1px solid #b7b7b7;
  ${mq.mobileL} {
    /* max-width: 70px; */
    width: 29%;
    padding: 10px;
  }
  ${mq.mobile} {
    /* max-width: 70px; */
    width: 29%;
    padding: 10px;
  }
`;

export const PhoneNumber2 = styled.input`
  max-width: 36%;
  padding: 21px 10px;
  border-radius: 4px;
  margin-left: 15px;
  border: 1px solid #b7b7b7;
  ${mq.mobileL} {
    padding: 10px;
    width: 34%;
    margin-left: 15px;
  }
  ${mq.mobile} {
    padding: 10px;
    width: 34%;
    margin-left: 15px;
  }
`;

export const PhoneSearch = styled.p`
  color: #222222;
  font-weight: 500;
  padding: 42px 0 16px;
  ${mq.mobileL} {
    font-size: 15px;
  }
  ${mq.mobile} {
    font-size: 15px;
  }
`;

export const PhoneOk = styled.button`
  width: 100%;
  padding: 3.7%;
  background-color: #30640a;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  border: none;
  font-family: "Noto Sans KR";
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
