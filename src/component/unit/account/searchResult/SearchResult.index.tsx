import * as S from "./SearchResult.styles";

export default function NotJoinPageUI() {
  return (
    <S.Form>
      <S.Background>
        <S.MainBox>
          <S.ContentWrapper>
            <p>가입된 회원정보가 없습니다.</p>
            <p>회원가입 하시겠습니까?</p>
          </S.ContentWrapper>
          <S.JoinButton>회원가입</S.JoinButton>
        </S.MainBox>
      </S.Background>
    </S.Form>
  );
}
