import * as S from "./ProductDetail.styles";
import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

export default function ProductDetail() {
  const [count, setCount] = useState(0);
  const [isWishList, setIsWishList] = useState(false);
  const [isActiveInfo, setIsActiveInfo] = useState(false);
  const [isActiveReview, setIsActiveReview] = useState(false);

  const onClickWishList = () => {
    setIsWishList((prev) => !prev);
  };

  const onClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMinus = () => {
    setCount((prev) => prev - 1);
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onClickInfoActive = () => {
    setIsActiveInfo(true);
    setIsActiveReview(false);
  };

  const onClickReviewActive = () => {
    setIsActiveInfo(false);
    setIsActiveReview(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.CategoryWrapper>
          <span>Home</span> <RightOutlined />
          <span>Shop</span> <RightOutlined />
          <span>주방</span>
        </S.CategoryWrapper>
        <S.DetailWrapper>
          <section>
            <S.DetailMainImg src="/purchase.png" alt="" />
            <S.DetailSubImgWrapper>
              <S.DetailSubImg src="/purchase.png" alt="" />
              <S.DetailSubImg src="/purchase.png" alt="" />
              <S.DetailSubImg src="/purchase.png" alt="" />
            </S.DetailSubImgWrapper>
          </section>
          <S.DetailPurchaseInfoWrapper>
            <S.RightNameBox>
              <S.ProductName>천연 소재 파우치</S.ProductName>
              <S.ProductPrice>8,500원</S.ProductPrice>
            </S.RightNameBox>
            <S.ProductOptionBox>
              <S.ProductOptionText>
                패키지 FREE! 100% 천연 소재로 만든 파우치입나다.
              </S.ProductOptionText>
              <S.OptionBox>
                <S.OptionText>필수</S.OptionText>
                <S.SelectOption
                  showSearch
                  placeholder="- [필수] 옵션을 선택해 주세요 -"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "jack",
                      label: "화이트: 천연 소재 파우치 ",
                    },
                    {
                      value: "lucy",
                      label: "블랙: 천연 소재 파우치",
                    },
                    {
                      value: "tom",
                      label: "버건디: 천연 소재 파우치",
                    },
                    {
                      value: "tom",
                      label: "라이트블루: 천연 소재 파우치",
                    },
                  ]}
                />
              </S.OptionBox>
            </S.ProductOptionBox>

            <S.BuyAmount>
              <S.OptionText>천연 소재 파우치</S.OptionText>
              <S.SeletedOption>- 화이트</S.SeletedOption>
              <S.SeletedAmountBox>
                <S.Qqq>
                  <S.SeletedAmount>
                    <button
                      onClick={onClickMinus}
                      style={{ cursor: "pointer" }}
                    >
                      <MinusOutlined />
                    </button>
                    <div>{count}</div>
                    <button onClick={onClickPlus}>
                      <PlusOutlined style={{ cursor: "pointer" }} />
                    </button>
                  </S.SeletedAmount>
                  <CloseOutlined style={{ cursor: "pointer" }} />
                </S.Qqq>
                <S.TotalPrice>8,500원</S.TotalPrice>
              </S.SeletedAmountBox>
            </S.BuyAmount>
            <S.TotalPriceBox>
              <S.TotalText>TOTAL</S.TotalText>
              <S.TotalPrice>
                8,500원<span>(1개)</span>
              </S.TotalPrice>
            </S.TotalPriceBox>
            <div>
              <S.NowBuyBtn>바로구매</S.NowBuyBtn>
              <S.BasketBtnBox>
                <button>장바구니</button>
                <button onClick={onClickWishList}>
                  {isWishList ? (
                    <S.WishListBtn>
                      <HeartFilled
                        style={{ fontSize: "26px", color: "rgb(48, 100, 21)" }}
                      />
                      <div>16</div>
                    </S.WishListBtn>
                  ) : (
                    <S.WishListBtn>
                      <HeartOutlined
                        style={{ fontSize: "26px", color: "rgb(48, 100, 21)" }}
                      />
                      <div>16</div>
                    </S.WishListBtn>
                  )}
                </button>
              </S.BasketBtnBox>
            </div>
          </S.DetailPurchaseInfoWrapper>
        </S.DetailWrapper>
      </S.Wrapper>
      <S.BtnBox>
        <S.SelectBtn onClick={onClickInfoActive} isActiveInfo={isActiveInfo}>
          상세정보
        </S.SelectBtn>
        <S.WWW onClick={onClickReviewActive} isActiveReview={isActiveReview}>
          구매평(41)
        </S.WWW>
      </S.BtnBox>
    </>
  );
}
