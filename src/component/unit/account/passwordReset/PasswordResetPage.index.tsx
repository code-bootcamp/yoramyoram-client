import * as S from "./PasswordResetPage.styles";

export default function PasswordResetPageUI() {
  return (
    <S.Form>
      <S.Background>
        <S.MainBox>
          <S.SearchBar>
            <S.SearchId>아이디 찾기</S.SearchId> <S.SearchLine>|</S.SearchLine>{" "}
            <S.SearchPassword>비밀번호 찾기</S.SearchPassword>
          </S.SearchBar>
          <S.ContentWrapper>
            <S.Comment1>비밀번호를 재설정해주세요.</S.Comment1>
            <S.PasswordWrapper>
              <S.PasswordInputWrapper>
                비밀번호 <S.PasswordInput />
              </S.PasswordInputWrapper>
            </S.PasswordWrapper>
            <S.PasswordWrapper2>
              <S.PasswordInputWrapper2>
                비밀번호 확인 <S.PasswordInput />
              </S.PasswordInputWrapper2>
            </S.PasswordWrapper2>
            <S.JoinButton>비밀번호 재설정하기</S.JoinButton>
          </S.ContentWrapper>
          <S.Info>
            <li>
              입력한 정보는 본인확인을 위해서 나이스평가정보에
              제공되며,본인확인용도 외에
              <p>사용하거나 저장되지 않습니다.</p>
            </li>
            <br></br>
            <li>
              위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
              1234-5678로
              <p>문의바랍니다.</p>
            </li>
          </S.Info>
        </S.MainBox>
      </S.Background>
    </S.Form>
  );
}
