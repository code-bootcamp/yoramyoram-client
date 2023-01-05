import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const Form = styled.form``;

export const Background = styled.div`
  padding: 170px 140px;
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

export const MainBox = styled.div`
  max-width: 680px;
  margin: 0 auto;
  font-family: "Noto Sans KR";
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #c4c4c4;
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
  font-weight: 700;
  padding: 0 30px;
`;

export const SearchPassword = styled.p`
  cursor: pointer;
  font-weight: 700;
  color: #30640a;
`;

export const ContentWrapper = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  padding: 47px 57px 54px;
  margin: 30px auto 37px;

  ${mq.mobileL} {
    padding: 10px;
  }
  ${mq.mobile} {
    padding: 10px;
  }
`;

export const PasswordWrapper = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  align-items: inherit;
  padding-bottom: 22px;
`;
export const PasswordInput = styled.input`
  width: 75%;
  padding: 13px;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  font-size: 22px;
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.mobile} {
    width: 100%;
  }
`;

export const PasswordInputText = styled.div`
  ${mq.mobileL} {
    padding-bottom: 10px;
    font-size: 14px;
  }
  ${mq.mobile} {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mq.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
  ${mq.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const JoinButton = styled.button`
  max-width: 580px;
  width: 100%;
  color: #ffffff;
  background-color: #30640a;
  border: none;
  padding: 20px 0;
  font-size: 18px;
  margin-top: 33px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

export const Comment1 = styled.p`
  font-size: 18px;
  padding-bottom: 33px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;

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
