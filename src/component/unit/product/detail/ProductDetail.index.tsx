import * as S from "./ProductDetail.styles";
import { FETCH_PRODUCT } from "../../../commons/hooks/queries/useFetchProduct";
import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import SwiperImg from "./SwiperImg";
import ProductReview from "./productReview/ProductReview.index";
import ProductDetailInfo from "./productDetailInfo/ProductDetailInfo.index";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { PriceReg } from "../../../../commons/library/util";

//
export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });
  console.log(router.query.productId);
  console.log(data);

  const [count, setCount] = useState(0);
  const [isWishList, setIsWishList] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [detailSelectBtn, setDetailSelectBtn] = useState(true);
  const [selectBtn, setSelectBtn] = useState<string>("상세정보");

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

  return (
    <>
      <S.Wrapper>
        <S.CategoryWrapper>
          <span>Home</span> <RightOutlined />
          <span>Shop</span> <RightOutlined />
          <span>주방</span>
        </S.CategoryWrapper>
        <S.DetailWrapper>
          <SwiperImg />
          <S.DetailPurchaseInfoWrapper>
            <S.RightNameBox>
              <S.ProductName>{data?.fetchProduct.name}</S.ProductName>
              <S.ProductPrice>{data?.fetchProduct.price}원</S.ProductPrice>
            </S.RightNameBox>
            <S.ProductOptionBox>
              <S.ProductOptionText>
                {data?.fetchProduct.description}
              </S.ProductOptionText>
              <S.OptionBox>
                <S.OptionText>필수</S.OptionText>
                <S.SelectOption
                  showSearch
                  placeholder="- [필수] 옵션을 선택해 주세요 -"
                  optionFilterProp="children"
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
              <S.OptionText>{data?.fetchProduct.name}</S.OptionText>
              <S.SeletedOption>- 화이트</S.SeletedOption>
              <S.SeletedAmountBox>
                <S.SeletedAmount1>
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
                </S.SeletedAmount1>
                <S.TotalPrice>{data?.fetchProduct.price}원</S.TotalPrice>
              </S.SeletedAmountBox>
            </S.BuyAmount>
            <S.TotalPriceBox>
              <S.TotalText>TOTAL</S.TotalText>
              <S.TotalPrice>
                {data?.fetchProduct.price}원<span>(1개)</span>
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
        <S.SelectBtn
          // detailSelectBtn={detailSelectBtn}
          onClick={() => setDetailSelectBtn(true)}
        >
          상세정보
        </S.SelectBtn>
        <S.SelectBtn
          // detailSelectBtn={detailSelectBtn}
          onClick={() => setDetailSelectBtn(false)}
        >
          구매평(41)
        </S.SelectBtn>
      </S.BtnBox>
      {detailSelectBtn ? <ProductDetailInfo /> : <ProductReview />}
    </>
  );
}
