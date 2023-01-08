import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, isAdminState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";

export const ADMIN_LOGIN = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password)
  }
`;

interface IFormData {
  email: string;
  password: string;
}

export const useAdminSignIn = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsAdminState] = useRecoilState(isAdminState);

  const [adminLogin] = useMutation(ADMIN_LOGIN);
  // 아직 타입이 없다.

  const AdminSignInSubmit = async (data: IFormData) => {
    try {
      const result = await adminLogin({
        variables: {
          ...data,
        },
      });
      // console.log(result);
      const accessToken = result.data?.adminLogin;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }
      setAccessToken(accessToken);
      setIsAdminState(true);
      //   localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "환영합니다!" });
      void router.push("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인에 실패했습니다." });
    }
  };
  return {
    AdminSignInSubmit,
  };
};
