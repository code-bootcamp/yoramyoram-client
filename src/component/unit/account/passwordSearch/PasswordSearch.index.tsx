import * as S from "./PasswordSearch.styles";

export default function PaSearchPageUI() {
  return (
    <S.Background>
      <S.Box>
        <S.SearchTitle>
          <S.SearchId>아이디 찾기 </S.SearchId> <S.SearchLine>|</S.SearchLine>
          <S.SearchPa>비밀번호 찾기</S.SearchPa>
        </S.SearchTitle>
        <S.MainCon>
          <S.Name>
            이름 <S.NameIn type="text" />
          </S.Name>
          <S.Phone>
            휴대폰 번호
            <S.PhoneNumber></S.PhoneNumber>-
            <S.PhoneNumber2 type="number" />-
            <S.PhoneNumber2 type="number" />
          </S.Phone>
          <S.Email>
            이메일 <S.EmailIn type="text" />
          </S.Email>
          <S.PhoneSearch>
            휴대폰 인증을 통해 아이디를 찾을 수 있습니다.
          </S.PhoneSearch>
          <div>
            <S.PhoneOk>인증하기</S.PhoneOk>
          </div>
        </S.MainCon>
        <S.Info>
          <li>
            입력한 정보는 본인확인을 위해서 나이스평가정보에
            제공되며,본인확인용도 외에
            <S.InfoComment1>사용하거나 저장되지 않습니다.</S.InfoComment1>
          </li>
        </S.Info>
        <S.Info2>
          <li>
            위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
            1234-5678로
            <S.InfoComment1>문의바랍니다.</S.InfoComment1>
          </li>
        </S.Info2>
      </S.Box>
    </S.Background>
  );
}
