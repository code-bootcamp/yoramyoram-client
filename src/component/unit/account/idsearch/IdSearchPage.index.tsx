import * as S from "./IdSearchPage.styles";

export default function IdSearchPageUI() {
  return (
    <S.Background>
      <S.Box>
        <S.SearchTitle>
          <S.SearchId>아이디 찾기 </S.SearchId> <S.SearchLine>|</S.SearchLine>
          <S.SearchPa>비밀번호 찾기</S.SearchPa>
        </S.SearchTitle>
        <S.MainCon>
          <S.Name>
            <S.NameLabel>이름</S.NameLabel>
            <S.NameIn type="text" />
          </S.Name>
          <S.Phone>
            <S.PhoneTitle>휴대폰 번호</S.PhoneTitle>
            <S.PhoneNumber>
              <S.PhoneSelect>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </S.PhoneSelect>
              <S.PhoneNumber2 type="text" />
              <S.PhoneNumber2 type="text" />
            </S.PhoneNumber>
          </S.Phone>
          <S.PhoneSearch>
            휴대폰 인증을 통해 아이디를 찾을 수 있습니다.
          </S.PhoneSearch>
          <div>
            <S.PhoneOk>인증하기</S.PhoneOk>
          </div>
        </S.MainCon>
        <S.Info>
          <S.NoticeText>
            <span>
              입력한 정보는 본인확인을 위해서 나이스평가정보에
              제공되며,본인확인용도 외에 사용하거나 저장되지 않습니다.
            </span>
          </S.NoticeText>
        </S.Info>
        <S.Info>
          <S.NoticeText>
            <span>
              위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
              1234- 5678로 문의바랍니다.
            </span>
          </S.NoticeText>
        </S.Info>
      </S.Box>
    </S.Background>
  );
}
