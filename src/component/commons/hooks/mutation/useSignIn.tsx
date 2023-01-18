import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

interface IFormData {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const signInSubmit = async (data: IFormData) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.login;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }
      setAccessToken(accessToken);

      void router.push("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인에 실패했습니다." });
    }
  };
  return {
    signInSubmit,
  };
};
