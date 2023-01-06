import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import * as S from "./index.styles";
import PurchaseHistory from "./purchaseHistory/PurchaseHistory.index";
import WishList from "./wishList/WishList.index";
import { FETCH_LOGIN_USER } from "../../../component/commons/hooks/queries/useFetchLoginUser";
import { useQuery } from "@apollo/client";
export default function Mypage() {
  const [mypage, setMyPage] = useState(true);
  const { data } = useQuery(FETCH_LOGIN_USER);
  return (
    <>
      <S.Wrapper>
        <S.innerWrapper>
          <S.MypageTitle>My page</S.MypageTitle>
          <S.MypageBox>
            <S.UserBox>
              <S.UserImgBox>
                <S.MypageImg src="/mypage/seed.png" />
              </S.UserImgBox>

              <S.UserInfoBox>
                <S.WelcomeText>
                  <span>{data?.fetchLoginUser.name}</span>님 안녕하세요.
                </S.WelcomeText>
                <S.RatingText>
                  <p>
                    {data?.fetchLoginUser.name}님은 현재{" "}
                    <S.Rating>씨앗</S.Rating>등급 입니다.
                  </p>
                  <p>
                    <S.PurposePoint>5,000</S.PurposePoint>p 달성하면{" "}
                    <S.Rating>새싹</S.Rating>등급으로 승급됩니다.
                  </p>
                </S.RatingText>
              </S.UserInfoBox>
            </S.UserBox>
            <S.RightTextBox>
              <S.MobileDiv>
                <S.RightPointText>YORAM POINT</S.RightPointText>
                <div>
                  <S.AccumulatePoint>
                    {data?.fetchLoginUser.point}
                  </S.AccumulatePoint>
                  p
                </div>
              </S.MobileDiv>
            </S.RightTextBox>
          </S.MypageBox>
          <S.ContentsBox>
            <S.MyShopingSelectBox>
              <S.SelectBoxText>My쇼핑</S.SelectBoxText>
              <S.BtnBox>
                <S.SelectBtn onClick={() => setMyPage(true)}>
                  구매내역 <RightOutlined />
                </S.SelectBtn>
                <S.SelectBtn onClick={() => setMyPage(false)}>
                  위시리스트 <RightOutlined />
                </S.SelectBtn>
              </S.BtnBox>
            </S.MyShopingSelectBox>
            {mypage ? <PurchaseHistory /> : <WishList />}
          </S.ContentsBox>
        </S.innerWrapper>
      </S.Wrapper>
    </>
  );
}
