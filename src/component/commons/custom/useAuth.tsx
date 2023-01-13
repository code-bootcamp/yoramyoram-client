import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FETCH_LOGIN_USER } from "../hooks/queries/useFetchLoginUser";

export const useAuth = () => {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const router = useRouter();
  useEffect(() => {
    if (data === undefined) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      void router.push("/sign_in");
    }
  }, []);
};
