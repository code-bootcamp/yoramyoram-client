import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  padding-top: 80px;
  ${mq.mobile} {
    padding-top: 0;
  }
  ${mq.mobileL} {
    padding-top: 0;
  }
`;

export const MainBox = styled.div`
  width: 500px;
  padding: 0 18px;
  margin: 0 auto;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
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
  color: #30640a;
  font-weight: 700;
  cursor: pointer;
`;

export const SearchLine = styled.p`
  color: #c4c4c4;
  padding: 0 30px;
`;

export const SearchPassword = styled.p`
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  color: #30640a;
  background-color: transparent;
  border: 1px solid #30640a;
  padding: 10px 0;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  margin-top: 34px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  &:hover {
    background-color: #30640a;
    border: none;
    color: #fcfbfa;
  }

  ${mq.mobileL} {
    font-size: 18px;
    &:last-of-type {
      margin-top: 10px;
    }
  }
  ${mq.mobile} {
    font-size: 18px;
    &:last-of-type {
      margin-top: 10px;
    }
  }
`;

export const Comment = styled.p`
  padding-bottom: 15px;
  font-size: 23px;
  font-weight: 500;
  color: #30640a;
`;

export const Thanks = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  color: #707070;
`;

export const Success = styled.div`
  width: 100%;
  text-align: center;
  display: block;
  margin-bottom: 30px;
  & > img {
    width: 25%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;
