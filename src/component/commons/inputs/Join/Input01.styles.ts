import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(48 100 10);
  margin-top: 20px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;

export const NameInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgb(48 100 10);
  padding: 15px;
  font-size: 15px;

  ${mq.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
  ${mq.mobileL} {
    width: 100%;
    margin-bottom: 10px;
  }
  &::placeholder {
    ${mq.mobile} {
      margin-bottom: 10px;
      font-size: 12px;
    }
    ${mq.mobileL} {
      margin-bottom: 10px;
      font-size: 12px;
    }
  }
`;
export const InputBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.3;
  ${mq.mobile} {
    margin-top: 1px;
  }
  ${mq.mobileL} {
    margin-top: 1px;
  }
`;

export const Label = styled.label`
  width: 15%;
  font-weight: 500;
  font-size: 16px;
  ${mq.mobile} {
    width: 100%;
    margin-bottom: 10px;
    display: block;
  }
  ${mq.mobileL} {
    width: 100%;
    margin-bottom: 10px;
    display: block;
  }
`;
