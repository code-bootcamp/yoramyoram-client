import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const Form = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
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
  width: 680px;
  margin: 0 auto;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.mobile} {
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
  cursor: pointer;
`;

export const SearchLine = styled.p`
  font-weight: 700;
  padding: 0 30px;
`;

export const SearchPassword = styled.p`
  font-weight: 700;
  color: #30640a;
`;

export const ContentWrapper = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  text-align: center;

  padding: 68px 0;
  margin: 30px auto 34px;
  & > p:last-child {
    padding-left: 5px;
  }
  ${mq.mobileL} {
    flex-direction: column;
    & > p:last-child {
      padding: 5px 0;
    }
  }
  ${mq.mobile} {
    flex-direction: column;
    & > p:last-child {
      padding: 5px 0;
    }
  }
`;

export const JoinButton = styled.button`
  max-width: 312px;
  width: 100%;
  color: white;
  background-color: #30640a;
  border: none;
  padding: 20px 0;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  font-family: "Noto Sans KR";
  cursor: pointer;

  ${mq.mobileL} {
    font-size: 18px;
  }
  ${mq.mobile} {
    font-size: 18px;
  }
`;
