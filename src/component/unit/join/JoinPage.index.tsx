import * as S from "./JoinPage.styles";

export default function JoinPageUI() {
  return (
    <S.Background>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Join Us</S.Title>
          <S.TitleCon>Yoram Yoram 회원 가입</S.TitleCon>
        </S.TitleWrapper>
        <S.Form>
          <S.InputWrapper>
            <S.Label>이름</S.Label> <S.NameInput type="text" />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>이메일</S.Label> <S.NameInput type="text" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.NameInput
              type="password"
              placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호 확인</S.Label>
            <S.NameInput
              type="password"
              placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자"
            />
          </S.InputWrapper>
          <S.PhoneNumber>
            <S.Label>휴대폰번호</S.Label>
            <S.PhoneNumber2>
              <S.PhoneSelect>
                <option>010</option>
                <option>011</option>
              </S.PhoneSelect>
              <S.PhoneSlash>-</S.PhoneSlash>
              <S.PhoneInput /> <S.PhoneSlash>-</S.PhoneSlash> <S.PhoneInput />
              <S.PhoneGo>인증번호 전송</S.PhoneGo>
            </S.PhoneNumber2>
          </S.PhoneNumber>
          <S.InputWrapper>
            <S.Label>인증번호</S.Label>
            <S.PhoneTextInput type="password" />
            <S.PhoneCheck>
              <S.PhoneCheckYo>인증확인</S.PhoneCheckYo>
            </S.PhoneCheck>
          </S.InputWrapper>
          <S.AddressWrapper2>
            <S.Label>주소</S.Label>
            <S.AddressWrapper>
              <S.AddressWrapper3>
                <S.NameInput type="text" placeholder="주소를 입력하세요." />
                <S.SearchButton type="button" value="우편번호찾기" />
              </S.AddressWrapper3>
              <S.AddressInput
                type="text"
                placeholder="상세주소를 입력하세요."
              />
            </S.AddressWrapper>
          </S.AddressWrapper2>

          {/* <S.SuccessWrapper>
            <S.SuccessInput type="radio" />{" "}
            <S.SuccessP>전체 약관 항목에 동의합니다.</S.SuccessP>
          </S.SuccessWrapper> */}
          <S.JoinButtonWrapper>
            <S.JoinButton>회원가입</S.JoinButton>
          </S.JoinButtonWrapper>
        </S.Form>
      </S.Container>
    </S.Background>
  );
}
