import styled from "@emotion/styled";

export const HeaderBox = styled.header`
  /* padding: 0 50px; */
  padding: 0 3%;
  width: 100%;
  height: 80px;
  line-height: 80px;
  position: fixed;
  top: 0;
  z-index: 4;
  color: #30640a;
  background-color: #ffffff;
  border-bottom: 1px solid #30640a;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftBox = styled.div``;

export const MiddleBox = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 35%;
  cursor: pointer;
`;

export const NavUl = styled.ul`
  width: 33.33%;
  display: flex;
`;
export const NavRightUl = styled.ul`
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
`;

export const NavBtn = styled.li`
  /* padding-right: 24px; */
  padding-right: 4.5%;
  font-size: 1rem;
  cursor: pointer;
  font-family: "PoppinsLight";
  &:last-child {
    padding-right: 0;
  }
`;
