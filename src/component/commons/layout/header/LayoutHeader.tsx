import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, isAdminState } from "../../../../commons/stores";
import { useMoveToPage } from "../../custom/useMoveToPage";
import { FETCH_LOGIN_ADMIN } from "../../hooks/queries/useFetchLoginAdmin";
import { FETCH_LOGIN_USER } from "../../hooks/queries/useFetchLoginUser";
import * as S from "./LayoutHeader.styles";
export default function Name() {
  const { data: user } = useQuery(FETCH_LOGIN_USER);
  const { data: admin } = useQuery(FETCH_LOGIN_ADMIN);
  const { onClickMoveToPage } = useMoveToPage();
  console.log(admin);
  console.log(admin?.fetchLoginAdminUser.name);
  if (user) {
    return (
      <S.UserInfoWrapper>
        <S.UserHi>{user?.fetchLoginUser.name}님, 안녕하세요.</S.UserHi>
        <S.PointBox>
          <S.UserPointTxt>YORAM POINT</S.UserPointTxt>
          <S.UserPoint>
            {user?.fetchLoginUser.point}
            <span>P</span>
          </S.UserPoint>
        </S.PointBox>
      </S.UserInfoWrapper>
    );
  } else if (admin) {
    return (
      <S.UserInfoWrapper>
        <S.UserHi>{admin?.fetchLoginAdminUser.name}님, 안녕하세요.</S.UserHi>
        <S.PointBox>
          <S.UserPointTxt>YORAM POINT</S.UserPointTxt>
          <S.UserPoint>
            {admin?.fetchLoginAdminUser.point}
            <span>P</span>
          </S.UserPoint>
        </S.PointBox>
      </S.UserInfoWrapper>
    );
  } else {
    return (
      <S.GoLoginWrapper>
        <S.GoLoginTxt>로그인이 필요합니다.</S.GoLoginTxt>
        <S.GoLogin onClick={onClickMoveToPage("/sign_in")}>Login</S.GoLogin>
      </S.GoLoginWrapper>
    );
  }
}
