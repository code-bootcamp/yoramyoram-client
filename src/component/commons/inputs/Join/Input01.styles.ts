import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(48 100 10);
  margin-top: 37px;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;

export const NameInput = styled.input`
  width: 85%;
  border-radius: 4px;
  border: 1px solid rgb(48 100 10);
  padding: 15px;
  font-size: 15px;
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
  &::placeholder {
    ${mq.mobile} {
      font-size: 12px;
    }
    ${mq.mobileL} {
      font-size: 12px;
    }
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
