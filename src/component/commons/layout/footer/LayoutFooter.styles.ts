import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const FooterBox = styled.footer`
  height: auto;
  background-color: #edebe7;
`;
export const FooterInnerBox = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const LeftBox = styled.div``;
export const LeftLogo = styled.img`
  width: 50%;
  margin-bottom: 4.5%;
`;
export const LeftText = styled.div`
  font-size: 1.2rem;
  color: #222222;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;

export const RightBox = styled.div``;

export const RightNavBox = styled.ul`
  /* margin-bottom: 57px; */
  padding-bottom: 7.2%;
  font-size: 1.1rem;
  color: #222222;
  display: flex;
  & > li {
    /* padding-right: 89px; */
    padding-right: 12%;
    font-family: "Poppins";
    font-weight: 400;
    cursor: pointer;
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
  font-size: 1rem;
  color: #707070;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
