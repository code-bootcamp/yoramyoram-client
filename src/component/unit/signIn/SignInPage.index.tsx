import * as S from "./SignInPage.styles";
import { useMoveToPage } from "../../commons/custom/useMoveToPage";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useForm } from "react-hook-form";
import { signInSchema } from "./SignIn.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignIn } from "../../commons/hooks/mutation/useSignIn";
import { IFormSignInData } from "./SignIn.types";

import styled from "@emotion/styled";

export default function SignInPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm<IFormSignInData>({
    resolver: yupResolver(signInSchema),
  });

  const { signInSubmit } = useSignIn();
  const onSubmitForm = (data: IFormSignInData) => {
    void signInSubmit(data);
  };

  const Error = styled.p`
    color: #ffffff73;
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
  `;
  return (
    <S.Background>
      <S.SignBoxWrapper>
        <S.SignBox onSubmit={handleSubmit(onSubmitForm)}>
          <S.SignWrapper>
            <S.SignTitle>Sign In</S.SignTitle>
            <S.InputWrapper>
              <S.IdInput
                type="text"
                placeholder="아이디"
                {...register("email")}
              />
              <Error>{formState.errors.email?.message}</Error>
              <S.PaInput
                type="password"
                placeholder="비밀번호"
                {...register("password")}
                style={{ marginBottom: "0px" }}
              />
              <Error style={{ marginBottom: "20px" }}>
                {formState.errors.password?.message}
              </Error>
            </S.InputWrapper>
            <S.SearchWrapper>
              <S.SearchButton
                type="button"
                onClick={onClickMoveToPage("/account/id_search")}
              >
                아이디 찾기 |
              </S.SearchButton>
              <S.SearchButton
                type="button"
                onClick={onClickMoveToPage("/account/password_search")}
              >
                비밀번호 찾기
              </S.SearchButton>
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
