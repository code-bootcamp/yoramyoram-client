import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 18px;
  color: #222222;

  ${mq.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 500;
  }
  ${mq.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Label = styled.label`
  width: 20%;
  text-align: initial;
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.mobile} {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 20px;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  background-color: none;
  background: transparent;

  ${mq.mobileL} {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
  ${mq.mobile} {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
`;
