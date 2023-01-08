import SignInPageUI from "../../src/component/unit/signIn/SignInPage.index";
import styled from "@emotion/styled";
import { useMoveToPage } from "../../src/component/commons/custom/useMoveToPage";

const JoinBtnWrapper = styled.div`
  margin: 170px auto 140px;
`;

const MainBox = styled.div`
  width: 680px;
  margin: 0 auto;
  border: 1px solid black;
`;
const Btn = styled.button`
  padding: 100px 30px;
  background-color: #30640a;
`;

export default function SignInPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <JoinBtnWrapper>
      <MainBox>
        <Btn onClick={onClickMoveToPage("/sign_in/admin_sign_in")}>
          관리자 로그인
        </Btn>
        <Btn onClick={onClickMoveToPage("/sign_in/user_sign_in")}>
          일반회원 로그인
        </Btn>
      </MainBox>
    </JoinBtnWrapper>
  );
}
