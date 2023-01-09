import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, isAdminState } from "../../../../commons/stores";
import { useMoveToPage } from "../../custom/useMoveToPage";
import { LOGOUT } from "../../hooks/mutation/useLogout";
import { FETCH_LOGIN_ADMIN } from "../../hooks/queries/useFetchLoginAdmin";
import { FETCH_LOGIN_USER } from "../../hooks/queries/useFetchLoginUser";
import * as S from "./LayoutHeader.styles";
import * as O from "./LayoutHeaderMain.styles";

export default function WebName() {
  const router = useRouter();
  const [logout] = useMutation(LOGOUT);
  const { data: user } = useQuery(FETCH_LOGIN_USER);
  const { data: admin } = useQuery(FETCH_LOGIN_ADMIN);
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = async () => {
    try {
      const result = await logout();
      router.push("/");
      location.reload();
      Modal.success({ content: "로그아웃 되었습니다." });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };
  if (user) {
    return (
      <>
        <O.NavBtn
          onClick={onClickMoveToPage("/mypage")}
          style={{ fontWeight: "500" }}
        >
          {user?.fetchLoginUser.name}
          <span style={{ fontWeight: "400" }}>님</span>
        </O.NavBtn>
        <O.NavBtn onClick={onClickLogout}>Logout</O.NavBtn>
      </>
    );
  } else if (admin) {
    return (
      <>
        <O.NavBtn
          onClick={onClickMoveToPage("/mypage")}
          style={{ fontWeight: "500" }}
        >
          {admin?.fetchLoginAdminUser.name}
          <span style={{ fontWeight: "400" }}>님</span>
        </O.NavBtn>
        <O.NavBtn onClick={onClickLogout}>Logout</O.NavBtn>
      </>
    );
  } else {
    return (
      <>
        <S.NavBtn onClick={onClickMoveToPage("/sign_in")}>Login</S.NavBtn>
        <S.NavBtn onClick={onClickMoveToPage("/join")}>Join</S.NavBtn>
      </>
    );
  }
}
