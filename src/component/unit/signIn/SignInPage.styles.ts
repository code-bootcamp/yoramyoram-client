import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Background = styled.div`
  justify-content: center;
  max-width: 920px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${mq.laptop} {
    padding: 0 50px;
    padding: 250px 0 250px;
  }
  ${mq.tablet} {
    padding: 0 50px;
    padding: 250px 0 150px;
  }
  ${mq.mobileL} {
    width: 100%;
    padding: 100px 18px 60px;
    height: auto;
  }
  ${mq.mobile} {
    width: 100%;
    padding: 100px 18px 60px;
    height: auto;
  }
`;

export const SignBoxWrapper = styled.div`
  display: flex;
  ${mq.mobileL} {
    display: block;
  }
  ${mq.mobile} {
    display: block;
  }
`;

export const SignBox = styled.form`
  border: 1px solid #707070;
  width: 50%;
  height: 460px;
  background-color: #30640a;
  ${mq.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px;
  }
  ${mq.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px;
  }
`;

export const SignWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 78px;
  max-width: 337px;
  margin: 0 auto;
`;

export const SignTitle = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-family: "NewYork";
`;

export const InputWrapper = styled.div`
  padding-top: 25px;
`;

export const IdInput = styled.input`
  width: 337px;
  color: #fcfbfa;
  height: 40px;
  font-size: 15px;
  border: none;
  outline: none;
  border-bottom: 1px white solid;
  background-color: transparent;
  padding: 8px;
  ::placeholder {
    color: white;
  }
  font-family: "Noto Sans KR";

  ${mq.mobileL} {
    max-width: 301px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  ${mq.mobile} {
    max-width: 301px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const PaInput = styled.input`
  width: 337px;
  height: 30px;
  border: none;
  font-size: 15px;
  color: #fcfbfa;
  border-bottom: 1px white solid;
  background-color: transparent;
  padding: 8px;
  outline: none;
  margin: 17px 0 22px;
  font-family: "Noto Sans KR";

  ::placeholder {
    color: white;
  }
  ${mq.mobileL} {
    max-width: 301px;
    width: 100%;
    display: block;
  }
  ${mq.mobile} {
    max-width: 301px;
    width: 100%;
    display: block;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > button:last-child {
    margin-left: 6px;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  color: #ffffff;
  font-family: "Noto Sans KR";
  cursor: pointer;

  ${mq.mobileL} {
    display: block;
  }
  ${mq.mobile} {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 53px;
`;

export const LoginButton = styled.button`
  width: 337px;
  height: 58px;
  font-size: 16px;
  background-color: white;
  border: none;
  color: #30640a;
  cursor: pointer;
  font-weight: 500;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    max-width: 301px;
    width: 100%;
  }
  ${mq.mobile} {
    max-width: 301px;
    width: 100%;
  }
`;

export const JoinBox = styled.div`
  border: 1px solid #707070;
  width: 50%;
  padding-top: 60px;
  text-align: center;

  ${mq.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
  }
  ${mq.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
  }
`;

export const JoinTitle = styled.h1`
  font-size: 30px;
  padding: 20px 0;
  font-family: "NewYork";
`;

export const JoinContent = styled.p`
  text-align: center;
  padding: 60px 0 72px;
  line-height: 26px;
  font-family: "Noto Sans KR";
`;

export const JoinButton = styled.button`
  width: 337px;
  height: 58px;
  color: #ffffff;
  border: none;
  background-color: #30640a;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;
