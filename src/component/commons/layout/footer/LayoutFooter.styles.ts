import styled from "@emotion/styled";

export const FooterBox = styled.footer`
  margin-top: -4px;
  height: auto;
  background-color: rgb(237, 235, 231);
`;
export const FooterInnerBox = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftBox = styled.div``;
export const LeftLogo = styled.img`
  width: 199px;
  height: 40px;
  margin-bottom: 17px;
`;
export const LeftText = styled.div`
  font-size: 18px;
  color: rgb(34, 34, 34);
  font-family: "NotoSansMedium";
`;

export const RightBox = styled.div``;

export const RightNavBox = styled.ul`
  margin-bottom: 57px;
  font-size: 1.1rem;
  color: rgb(34, 34, 34);
  display: flex;
  & > li {
    padding-right: 89px;
    font-family: "PoppinsRegular";
    cursor: pointer;
  }
`;
export const ZeroWasteInfo = styled.div`
  font-size: 15px;
  color: rgb(112, 112, 112);
  font-family: "NotoSansRegular";
`;
