import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import Input02 from "../../../commons/inputs/accountsearch/input02.index";
import * as S from "./PasswordSearch.styles";

export default function PaSearchPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Background>
      <S.Box>
        <S.SearchTitle>
          <S.SearchId onClick={onClickMoveToPage("/account/id_search")}>
            아이디 찾기{" "}
          </S.SearchId>{" "}
          <S.SearchLine>|</S.SearchLine>
          <S.SearchPa>비밀번호 찾기</S.SearchPa>
        </S.SearchTitle>
        <S.MainCon>
          <Input02 title="이름" type="text" />
          <Input02 title="이메일" type="text" />
          <S.PhoneNumberWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.PhoneNumberBtnInputBox>
              <S.NumberBox>
                <S.PhoneNumber>
                  <option>010</option>
                  <option>011</option>
                </S.PhoneNumber>
                <S.PhoneNumber2 type="text" />
                <S.PhoneNumber2 type="text" />
              </S.NumberBox>
              <S.CertNumber>인증번호 받기</S.CertNumber>
            </S.PhoneNumberBtnInputBox>
          </S.PhoneNumberWrapper>
          <Input02 type="text" title="인증하기" />
          <S.PhoneSearch>
            이메일과 휴대폰 번호 인증을 통해 비밀번호를 찾을 수 있습니다.
          </S.PhoneSearch>
          <S.PhoneOk>인증하기</S.PhoneOk>
        </S.MainCon>
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
      </S.Box>
    </S.Background>
  );
}
