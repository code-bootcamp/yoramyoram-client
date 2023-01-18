import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { updataPasswordPhoneState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import { UPDATE_PASSWORD } from "./PasswordResetPage.query";
import * as S from "./PasswordResetPage.styles";

interface IData {
  password: string;
  passwordCheck: string;
  phone: string;
}

export default function PasswordResetPageUI() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [updatePassword] = useMutation(UPDATE_PASSWORD);
  const [UpdataPasswordPhoneState] = useRecoilState(updataPasswordPhoneState);
  // console.log(UpdataPasswordPhoneState);

  const { register, handleSubmit, watch } = useForm<IData>({
    mode: "onChange",
  });

  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
    } else {
    }
  }, [watchAll]);
  // console.log(watchAll);

  const onClickPasswordReset = async (data: IData) => {
    try {
      await updatePassword({
        variables: {
          password: data.password,
          phone: UpdataPasswordPhoneState,
        },
      });
      void router.push("/sign_in");
    } catch (error) {
      Modal.warning({ content: "형식에 맞춰주세요." });
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onClickPasswordReset)}>
      <S.Background>
        <S.MainBox>
          <S.SearchBar>
            <S.SearchId onClick={onClickMoveToPage("/account/id_search")}>
              아이디 찾기
            </S.SearchId>
            <S.SearchLine>|</S.SearchLine>
            <S.SearchPassword
              onClick={onClickMoveToPage("/account/password_search")}
            >
              비밀번호 찾기
            </S.SearchPassword>
          </S.SearchBar>
          <S.ContentWrapper>
            <S.Comment1>비밀번호를 재설정해주세요.</S.Comment1>
            <S.PasswordWrapper>
              <S.PasswordInputWrapper>
                <S.PasswordInputText>비밀번호</S.PasswordInputText>{" "}
                <S.PasswordInput {...register("password")} type="password" />
              </S.PasswordInputWrapper>
            </S.PasswordWrapper>
            <S.PasswordWrapper>
              <S.PasswordInputWrapper>
                <S.PasswordInputText>비밀번호 확인</S.PasswordInputText>{" "}
                <S.PasswordInput
                  {...register("passwordCheck")}
                  type="password"
                />
              </S.PasswordInputWrapper>
            </S.PasswordWrapper>
            <S.JoinButton>비밀번호 재설정하기</S.JoinButton>
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
              1234-5678로문의바랍니다.
            </S.NoticeText>
          </S.Info>
        </S.MainBox>
      </S.Background>
    </S.Form>
  );
}
