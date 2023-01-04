import * as S from "./SignInPage.styles";
import { useMoveToPage } from "../../commons/custom/useMoveToPage";

export default function SignInPageUI() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Background>
      <S.SignBoxWrapper>
        <S.SignBox>
          <S.SignWrapper>
            <S.SignTitle>Sign In</S.SignTitle>
            <S.InputWrapper>
              <S.IdInput type="text" placeholder="아이디" />
              <S.PaInput type="password" placeholder="비밀번호" />
            </S.InputWrapper>
            <S.SearchWrapper>
              <S.SearchButton>아이디 찾기 |</S.SearchButton>
              <S.SearchButton>비밀번호 찾기</S.SearchButton>
            </S.SearchWrapper>
            <S.ButtonWrapper>
              <S.LoginButton>로그인</S.LoginButton>
            </S.ButtonWrapper>
          </S.SignWrapper>
        </S.SignBox>
        <S.JoinBox>
          <S.JoinTitle>Join Us</S.JoinTitle>
          <S.JoinContent>
            Yoram Yoram 멤버가 되어 <br />
            제로 웨이스트 라이프를 경험해 보세요.
          </S.JoinContent>
          <S.JoinButton onClick={onClickMoveToPage("/join")}>
            회원가입
          </S.JoinButton>
        </S.JoinBox>
      </S.SignBoxWrapper>
    </S.Background>
  );
}
