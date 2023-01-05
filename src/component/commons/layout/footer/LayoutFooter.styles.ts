import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const FooterBox = styled.footer`
  height: auto;
  background-color: #edebe7;
`;
export const FooterInnerBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mq.tablet} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
    padding: 50px 18px;
  }
  ${mq.mobile} {
    display: block;
    padding: 50px 18px;
  }
`;

export const LeftBox = styled.div``;
export const LeftLogo = styled.img`
  width: 50%;
  margin-bottom: 20px;
`;
export const LeftText = styled.div`
  font-size: 16px;
  color: #222222;
  font-family: "Noto Sans KR";
  font-weight: 400;
  line-height: 1.3;
  ${mq.mobile} {
    margin-bottom: 30px;
  }
  ${mq.mobileL} {
    margin-bottom: 30px;
  }
  ${mq.tablet} {
    margin-bottom: 30px;
  }
`;

export const RightBox = styled.div``;

export const RightNavBox = styled.ul`
  padding-bottom: 40px;
  font-size: 16px;
  font-weight: 300;
  color: #222222;
  display: flex;
  ${mq.mobile} {
    padding-bottom: 0px;
  }
  ${mq.mobileL} {
    padding-bottom: 0px;
  }
  ${mq.tablet} {
    padding-bottom: 0px;
  }
  & > li {
    /* padding-right: 89px; */
    padding-right: 60px;
    font-family: "Poppins";
    font-weight: 400;
    cursor: pointer;
    ${mq.mobile} {
      margin-bottom: 30px;
    }
    ${mq.mobileL} {
      margin-bottom: 30px;
    }
    ${mq.tablet} {
      margin-bottom: 30px;
    }
  }

  & > li:last-child {
    padding-right: 0;
  }
  ${mq.tablet} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
  ${mq.mobile} {
    display: block;
  }
`;
export const ZeroWasteInfo = styled.div`
  font-size: 14px;
  color: #707070;
  font-family: "Noto Sans KR";
  font-weight: 300;
  line-height: 1.5;
`;
