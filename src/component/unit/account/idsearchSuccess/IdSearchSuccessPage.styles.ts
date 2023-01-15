import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const Form = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  padding-top: 80px;
  ${mq.laptop} {
    padding: 200px 18px 180px 18px;
  }
  ${mq.tablet} {
    padding: 200px 18px 180px 18px;
  }
  ${mq.mobileL} {
    padding: 200px 18px 120px 18px;
  }
  ${mq.mobile} {
    padding: 200px 18px 120px 18px;
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
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 50px 49px 40px;
  width: 100%;
  margin: 30px auto 37px;
  ${mq.mobileL} {
    padding: 50px 10px 10px;
  }
  ${mq.mobile} {
    padding: 50px 10px 10px;
  }
`;

export const JoinButton = styled.button`
  width: 100%;
  color: white;
  background-color: #30640a;
  border: none;
  padding: 11px 0;
  font-size: 22px;
  display: block;
  margin: 0 auto;
  margin-top: 34px;
  font-family: "Noto Sans KR";
  ${mq.mobileL} {
    font-size: 18px;
  }
  ${mq.mobile} {
    font-size: 18px;
  }
`;

export const Comment1 = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
`;

export const Comment2Wrapper = styled.div`
  font-size: 20px;
`;

export const Comment2 = styled.span`
  font-weight: 700;
`;

export const Comment21 = styled.span``;

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
  text-indent: -26px;
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
