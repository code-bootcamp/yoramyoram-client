import { useRecoilState } from "recoil";
import { findUserEmailState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import * as S from "./IdSearchSuccessPage.styles";

export default function IdSearchSuccessPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  const [UserEmailState, setUserEmailState] =
    useRecoilState(findUserEmailState);
  return (
    <S.Form>
      <S.Background>
        <S.MainBox>
          <S.SearchBar>
            <S.SearchId>아이디 찾기</S.SearchId> <S.SearchLine>|</S.SearchLine>{" "}
            <S.SearchPassword
              onClick={onClickMoveToPage("/account/password_search")}
            >
              비밀번호 찾기
            </S.SearchPassword>
          </S.SearchBar>
          <S.ContentWrapper>
            <S.Comment1>회원님의 아이디는</S.Comment1>
            <S.Comment2Wrapper>
              <S.Comment2>{UserEmailState}</S.Comment2>
              <S.Comment21>입니다.</S.Comment21>
            </S.Comment2Wrapper>
            <S.JoinButton>로그인</S.JoinButton>
          </S.ContentWrapper>
          <S.Info>
            <S.NoticeText>
              입력한 정보는 본인확인을 위해서 나이스평가정보에
              제공되며,본인확인용도 외에 사용하거나 저장되지 않습니다.
            </S.NoticeText>
          </S.Info>
          <S.Info>
            <S.NoticeText>
              위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
              1234-5678로 문의바랍니다.
            </S.NoticeText>
          </S.Info>
        </S.MainBox>
      </S.Background>
    </S.Form>
  );
}
