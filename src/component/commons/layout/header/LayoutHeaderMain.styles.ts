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
  background-color: #ffffff;
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
  font-family: "PoppinsLight";
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
  border-bottom: 1px solid #306415;
  padding: 18px;
`;
export const Hamburger = styled(MenuOutlined)`
  & > svg {
    color: #306415;
    font-size: 18px;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Sidebar = styled.div`
  width: 280px;
  height: 100vh;
  position: absolute;
  top: 67px;
  background-color: #306415;
  left: ${(props) => (props.isOpen ? "0px" : "-376px")};
  transition: 1s;
`;
export const Nav = styled.nav`
  color: #fcfbfa;
  font-family: "NewYork";
  padding: 30px 18px;
  font-size: 20px;
  & > ul > li {
    margin-bottom: 20px;
  }
`;
export const Logo = styled.div`
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
    color: #306415;
    font-size: 18px;
  }
`;
export const Cart = styled(ShoppingCartOutlined)`
  & > svg {
    color: #306415;
    font-size: 18px;
  }
`;
