import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  return (
    <S.HeaderBox>
      <S.TextBox>
        <S.NavUl>
          <S.NavBtn>Our Story</S.NavBtn>
          <S.NavBtn>Shop</S.NavBtn>
          <S.NavBtn>Offline Shops</S.NavBtn>
        </S.NavUl>
        <S.MiddleBox>
          <S.LogoImg src="/header/yoram_wh.png" />
        </S.MiddleBox>
        <S.NavRightUl>
          <S.NavBtn>Community</S.NavBtn>
          <S.NavBtn>Login</S.NavBtn>
          <S.NavBtn>Cart</S.NavBtn>
        </S.NavRightUl>
      </S.TextBox>
    </S.HeaderBox>
  );
}
