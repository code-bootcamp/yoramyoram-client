import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import * as S from "./index.styles";
import PurchaseHistory from "./purchaseHistory/PurchaseHistory.index";
import WishList from "./wishList/WishList.index";

export default function Mypage() {
  const [mypage, setMyPage] = useState(true);

  return (
    <>
      <S.Wrapper>
        <S.innerWrapper>
          <S.MypageTitle>My page</S.MypageTitle>
          <S.MypageBox>
            <S.UserBox>
              <S.MypageImg src="/favicon.ico" />
              <S.UserInfoBox>
                <S.WelcomeText>
                  <span>김요람</span>님 안녕하세요
                </S.WelcomeText>
                <S.RatingText>
                  <div>
                    김요람님은 현재 <S.Rating>씨앗</S.Rating>등급 입니다.
                  </div>
                  <div>
                    <S.PurposePoint>5,000</S.PurposePoint>p 달성하면{" "}
                    <S.Rating>새싹</S.Rating>등급으로 승급됩니다.
                  </div>
                </S.RatingText>
              </S.UserInfoBox>
            </S.UserBox>
            <S.RightTextBox>
              <S.RightPointText>YORAM POINT</S.RightPointText>
              <div>
                <S.AccumulatePoint>3,862</S.AccumulatePoint>p
              </div>
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
