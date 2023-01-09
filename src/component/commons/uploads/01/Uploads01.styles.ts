import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const UploadImage = styled.img`
  width: 140px;
  height: 140px;
  margin-right: 15px;
  cursor: pointer;
  ${mq.mobile} {
    width: 80px;
    height: 80px;
  }
  ${mq.mobileL} {
    width: 80px;
    height: 80px;
  }
`;

export const UploadButton = styled.button`
  width: 140px;
  height: 140px;
  background-color: #30640a;
  margin-right: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffffa6;
  font-size: 30px;
  ${mq.mobile} {
    width: 80px;
    height: 80px;
  }
  ${mq.mobileL} {
    width: 80px;
    height: 80px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
