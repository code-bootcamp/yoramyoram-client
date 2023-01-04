import * as mq from "../../../commons/styles/mediaQueries";
import styled from "@emotion/styled";

export const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #30640a;
  ${mq.mobile} {
    width: 80%;
  }
`;
