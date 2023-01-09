import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";

export const SearchBoxMobile = styled.div`
  display: none;

  ${mq.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
  }
  ${mq.mobileL} {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  display: block;
  background: none;
  border-bottom: 1px solid #b7b7b7;
  padding: 10px;
  font-size: 1rem;
`;

export const SearchOutline = styled(SearchOutlined)`
  position: absolute;
  top: 19px;
  right: 6px;
`;
