import { useMoveToPage } from "../../custom/useMoveToPage";
import * as S from "./LayoutHeader.styles";
import * as O from "./LayoutHeaderMain.styles";

export function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
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
  );
}

export function LayoutHeaderMain() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
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
  );
}
