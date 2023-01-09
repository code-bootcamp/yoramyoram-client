import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, isAdminState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationAdminLoginArgs,
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
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsAdminState] = useRecoilState(isAdminState);

  const [adminLogin] = useMutation<
    Pick<IMutation, "adminLogin">,
    IMutationAdminLoginArgs
  >(ADMIN_LOGIN);

  const AdminSignInSubmit = async (data: IFormData) => {
    try {
      const result = await adminLogin({
        variables: {
          ...data,
        },
      });
      // console.log(result);
      const accessToken = result.data?.adminLogin;
      // console.log(accessToken);
      console.log("useAdmionSignIn리코일 :", accessToken);
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }
      setAccessToken(accessToken);
      // console.log(accessToken);
      // setAccessToken(accessToken);
      // console.log("useAdmionSignIn리코일 :", accessToken);
      // setIsAdminState(true);
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
