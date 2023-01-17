import styled from "@emotion/styled";
import * as mq from "../../../../commons/styles/mediaQueries";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

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
  background-color: #fcfbfa;
  border-bottom: 1px solid #30640a;
  ${mq.tablet} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
  ${mq.mobile} {
    display: none;
  }
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
  font-family: "Poppins";
  font-weight: 300;
  &:last-child {
    padding-right: 0;
  }
`;

/// MOBILE HEADER ///

export const MobileHeader = styled.header`
  display: none;
  height: 70px;
  ${mq.tablet} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
  ${mq.mobile} {
    display: block;
  }
  background-color: #fcfbfa;
  border-bottom: 1px solid #30640a;
  padding: 18px;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
`;
export const Hamburger = styled(MenuOutlined)`
  & > svg {
    color: #30640a;
    font-size: 18px;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Sidebar = styled.div<{ isOpen: boolean }>`
  width: 280px;
  height: 100vh;
  position: fixed;
  padding: 30px 18px;
  top: 69px;
  background-color: #30640a;
  left: ${(props) => (props.isOpen ? "0px" : "-376px")};
  transition: 1s;
  z-index: 9;
`;
export const Nav = styled.nav`
  color: #fcfbfa;
  font-family: "NewYork";
  font-size: 20px;
  & > ul > li {
    margin-bottom: 20px;
  }
`;
export const Logo = styled.button`
  margin-left: 37px;
  & > img {
    width: 100%;
  }

  ${mq.tablet} {
    width: 19%;
  }
  ${mq.mobileL} {
    width: 34%;
  }
  ${mq.mobile} {
    width: 45%;
  }
`;
export const MyMenu = styled.div``;

export const User = styled(UserOutlined)`
  margin-right: 15px;
  & > svg {
    color: #30640a;
    font-size: 18px;
  }
`;
export const Cart = styled(ShoppingCartOutlined)`
  & > svg {
    color: #30640a;
    font-size: 18px;
  }
`;

export const GoLoginWrapper = styled.div`
  margin-bottom: 30px;
  color: #fcfbfa;
  font-size: 20px;
`;
export const GoLoginTxt = styled.h5`
  color: #fcfbfa;
`;
export const GoLogin = styled.button`
  color: #fcfbfa;
  font-family: "NewYork";
  border: 1px solid #fcfbfa;
  padding: 3px 8px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
`;
export const UserInfoWrapper = styled.div`
  margin-bottom: 30px;
  color: #fcfbfa;
`;
export const UserHi = styled.h5`
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #fcfbfa4f;
  margin-bottom: 20px;
`;
export const PointBox = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #fcfbfa4f;
`;
export const UserPointTxt = styled.h5`
  font-size: 15px;
  margin-bottom: 8px;
`;
export const UserPoint = styled.p`
  font-size: 20px;
  font-weight: 500;
  & > span {
    font-size: 15px;
    margin-left: 3px;
  }
`;
