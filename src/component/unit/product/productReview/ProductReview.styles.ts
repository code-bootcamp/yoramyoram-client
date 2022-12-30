import styled from "@emotion/styled";

export const ReviewWrapper = styled.div`
  width: 67.7vw;
  margin: 34px auto;
`;

export const ReviewHeader = styled.header`
  border-bottom: 1px solid rgb(170, 170, 170);
`;

export const HeaderText = styled.div`
  /* font-family:NotoSansKR-Regular */
  font-size: 1rem;
  color: rgb(114, 114, 114);
  padding-bottom: 14px;
`;

export const ReviewWriteBtn = styled.button`
  width: 146px;
  height: 52px;
  background-color: rgb(48, 100, 10);
  color: #ffffff;
  font-size: 1.1rem;
  border: none;
  /* font-family:NotoSansKR-Medium */
  cursor: pointer;
`;

export const ReviewInnerWrapper = styled.article`
  padding: 22px 0 20px;
  border-bottom: 1px solid rgb(170, 170, 170);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionText = styled.div`
  font-size: 1rem;
  color: rgb(112, 112, 112);
  padding: 4px 0 14px;
  /* font-family:  NotoSansKR-Regular */
`;

export const ReviewText = styled.div`
  font-size: 1rem;
  color: rgb(34, 34, 34);
  padding-bottom: 11px;
  /* font-family:  NotoSansKR-Regular */
`;

export const ReviewCommentBtn = styled.div`
  font-size: 1rem;
  color: rgb(48, 100, 10);
  & > button {
    background: none;
    border: none;
    /* font-family:    NotoSansKR-Bold */
    cursor: pointer;
  }
`;

export const ReviewBtnWrapper = styled.div`
  padding-bottom: 57px;
  display: flex;
  justify-content: end;
  color: rgb(139, 139, 139);
  * > svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const ReviewRelatedWrpper = styled.div`
  font-size: 1rem;
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Regular */

  & > div:first-child {
    padding-bottom: 6px;
  }
`;
