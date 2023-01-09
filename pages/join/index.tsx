import { useMoveToPage } from "../../src/component/commons/custom/useMoveToPage";
import styled from "@emotion/styled";

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

export default function JoinPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <JoinBtnWrapper>
      <MainBox>
        <Btn onClick={onClickMoveToPage("/join/admin_user_join")}>
          관리자 회원가입
        </Btn>
        <Btn onClick={onClickMoveToPage("/join/user_join")}>
          일반회원 회원가입
        </Btn>
      </MainBox>
    </JoinBtnWrapper>
  );
}
