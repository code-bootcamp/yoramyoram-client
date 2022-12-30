import * as S from "./PurchaseHistory.styles";
import { RightOutlined } from "@ant-design/icons";

export default function PurchaseHistory() {
  const qqq = [1, 2, 3, 4, 5, 6];

  return (
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
                김요람님은 현재 <S.Rating>씨앗</S.Rating>등급 입니다.
                <br />
                <S.PurposePoint>5,000</S.PurposePoint>p 달성하면{" "}
                <S.Rating>새싹</S.Rating>등급으로 승급됩니다.
              </S.RatingText>
            </S.UserInfoBox>
          </S.UserBox>
          <S.RightTextBox>
            <S.RightPointText>YORAM POINT</S.RightPointText>
            <div style={{ fontSize: "1.2rem" }}>
              <S.AccumulatePoint>3,862</S.AccumulatePoint>p
            </div>
          </S.RightTextBox>
        </S.MypageBox>
        <S.ContentsBox>
          <S.MyShopingSelectBox>
            <S.SelectBoxText>My쇼핑</S.SelectBoxText>
            <S.BtnBox>
              <S.SelectBtn>
                구매내역 <RightOutlined />
              </S.SelectBtn>
              <S.SelectBtn>
                위시리스트 <RightOutlined />
              </S.SelectBtn>
            </S.BtnBox>
          </S.MyShopingSelectBox>
          <S.PurchaseHistoryBox>
            <S.HistoryText>구매내역</S.HistoryText>

            {qqq.map((el, idx) => (
              <S.PurchasedItem key={idx}>
                <S.PurchasedItemInfo>
                  <div>
                    <S.ProductImg src="/purchase.png" />
                  </div>
                  <S.PurchasedItemInfoText>
                    <S.ItemName>구르미 텀블러</S.ItemName>
                    <S.ItemPriceBox>
                      <span>6,510원</span> <span>2022-12-26</span>
                    </S.ItemPriceBox>
                  </S.PurchasedItemInfoText>
                </S.PurchasedItemInfo>
                <S.RepurchaseDiv>
                  <S.RepurchaseBtn>재구매</S.RepurchaseBtn>
                </S.RepurchaseDiv>
              </S.PurchasedItem>
            ))}
            <S.ListPagenation>
              <S.PageNationLeftArrow />
              <S.Page>1</S.Page>
              <S.Page>2</S.Page>
              <S.Page>3</S.Page>
              <S.Page>4</S.Page>
              <S.Page>5</S.Page>
              <S.PageNationRightArrow />
            </S.ListPagenation>
          </S.PurchaseHistoryBox>
        </S.ContentsBox>
      </S.innerWrapper>
    </S.Wrapper>
  );
}
