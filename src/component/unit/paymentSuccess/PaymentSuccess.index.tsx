import { useRouter } from "next/router";
import * as S from "./PaymentSuccess.styles";

export default function PaymentSuccessPageUI() {
  const router = useRouter();

  const onClickMoveShopPage = () => {
    router.push("./products");
  };

  const onClickMoveHome = () => {
    router.push("/");
  };
  return (
    <S.Wrapper>
      <S.Background>
        <S.MainBox>
          <S.ContentWrapper>
            <S.Success>
              <img src="/paymentsuccess.png"></img>
            </S.Success>
            <S.Comment>결제가 완료되었습니다.</S.Comment>
            <S.Thanks>감사합니다.</S.Thanks>
            <S.ButtonBox>
              <S.Button onClick={onClickMoveShopPage}>쇼핑 계속하기</S.Button>
              <S.Button onClick={onClickMoveHome}>메인가기</S.Button>
            </S.ButtonBox>
          </S.ContentWrapper>
        </S.MainBox>
      </S.Background>
    </S.Wrapper>
  );
}
