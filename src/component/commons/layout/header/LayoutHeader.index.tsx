import { useState } from "react";
import { useMoveToPage } from "../../custom/useMoveToPage";
import * as S from "./LayoutHeader.styles";
import * as O from "./LayoutHeaderMain.styles";

export function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();

  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };

  return (
    <>
      <S.MobileHeader>
        <S.HeaderWrapper>
          <S.Hamburger onClick={toggleMenu} />
          <S.Logo>
            <img src="/header/logo_gr.png"></img>
          </S.Logo>
          <S.MyMenu>
            <S.User />
            <S.Cart />
          </S.MyMenu>
        </S.HeaderWrapper>
        <S.Sidebar isOpen={isOpen}>
          <S.Nav>
            <ul>
              <li>Our Story</li>
              <li>Shop</li>
              <li>Offline Shop</li>
              <li>Community</li>
              <li>Login</li>
              <li>Cart</li>
            </ul>
          </S.Nav>
        </S.Sidebar>
      </S.MobileHeader>
      <S.HeaderBox>
        <S.TextBox>
          <S.NavUl>
            <S.NavBtn onClick={onClickMoveToPage("/about")}>Our Story</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/products")}>Shop</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/offline_shop")}>
              Offline Shops
            </S.NavBtn>
          </S.NavUl>
          <S.MiddleBox>
            <S.LogoImg src="/header/yoram_wh.png" />
          </S.MiddleBox>
          <S.NavRightUl>
            <S.NavBtn>Community</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/join")}>Login</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/")}>Cart</S.NavBtn>
          </S.NavRightUl>
        </S.TextBox>
      </S.HeaderBox>
    </>
  );
}

export function LayoutHeaderMain() {
  const { onClickMoveToPage } = useMoveToPage();

  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };

  return (
    <>
      <O.MobileHeader>
        <O.HeaderWrapper>
          <O.Hamburger onClick={toggleMenu} />
          <O.Logo>
            <img src="/header/logo_gr.png"></img>
          </O.Logo>
          <O.MyMenu>
            <O.User />
            <O.Cart />
          </O.MyMenu>
        </O.HeaderWrapper>
        <O.Sidebar isOpen={isOpen}>
          <O.Nav>
            <ul>
              <li>Our Story</li>
              <li>Shop</li>
              <li>Offline Shop</li>
              <li>Community</li>
              <li>Login</li>
              <li>Cart</li>
            </ul>
          </O.Nav>
        </O.Sidebar>
      </O.MobileHeader>
      <O.HeaderBox>
        <O.TextBox>
          <O.NavUl>
            <O.NavBtn onClick={onClickMoveToPage("/about")}>Our Story</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/products")}>Shop</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/offline_shop")}>
              Offline Shops
            </O.NavBtn>
          </O.NavUl>
          <O.MiddleBox>
            <S.LogoImg src="/header/logo_gr.png" />
          </O.MiddleBox>
          <O.NavRightUl>
            <O.NavBtn>Community</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/join")}>Login</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/")}>Cart</O.NavBtn>
          </O.NavRightUl>
        </O.TextBox>
      </O.HeaderBox>
    </>
  );
}
