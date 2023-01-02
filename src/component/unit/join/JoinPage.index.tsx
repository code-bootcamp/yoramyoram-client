import Input01 from "../../commons/inputs/Join/Input01.index";
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
          <Input01 type="text" title="이름" placeholder="이름을 입력하세요." />
          <Input01
            type="text"
            title="이메일"
            placeholder="이메일을 입력하세요."
          />
          <Input01
            type="password"
            title="비밀번호"
            placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합,10~16자"
          />
          <Input01
            type="password"
            title="비밀번호 확인"
            placeholder="영문 대소문자/숫자/특수문자 중  2가지 이상 조합,10~16자"
          />
          <S.PhoneNumber>
            <S.Label>휴대폰번호</S.Label>
            <S.PhoneNumber2>
              <S.PhoneSelect>
                <option>010</option>
                <option>011</option>
              </S.PhoneSelect>
              <S.PhoneInput type="text" /> <S.PhoneInput type="text" />
              <S.CertNumber>인증번호 전송</S.CertNumber>
            </S.PhoneNumber2>
          </S.PhoneNumber>
          <S.CertNumberWrapper>
            <S.Label>인증번호</S.Label>
            <S.CertNumberInput />
            <S.CertNumberButton>인증확인</S.CertNumberButton>
          </S.CertNumberWrapper>

          <S.AddressNumberWrapper>
            <S.Label>주소</S.Label>
            <S.AddressNumberInput type="text" />
            <S.AddressNumberButton>우편번호 찾기</S.AddressNumberButton>
          </S.AddressNumberWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInput placeholder="주소를 입력하세요" />
          </S.AddressInputWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInput placeholder="상세주소를 입력하세요" />
          </S.AddressInputWrapper>

          <S.JoinButtonWrapper>
            <S.JoinButton>회원가입</S.JoinButton>
          </S.JoinButtonWrapper>
        </S.Form>
      </S.Container>
    </S.Background>
  );
}
