import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFetchProducts } from "../../../commons/hooks/queries/useFetchProducts";
import CategoryBar from "./CategoryBar";
import CategoryBarSticky from "./CategoryBarSticky";

import * as S from "./ProductList.styles";
export default function ProductList() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [category, setCategory] = useState<string>("주방");

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 226) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const { data } = useFetchProducts();

  // console.log(data.fetchProducts.product_id); // 데이터 잘 불러옴

  // 임시용
  const dummyData = new Array(20).fill(0);
  const onClickMoveToDetail = (event) => {
    void router.push(`/product/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.ListBanner>Yoram Yoram Shop</S.ListBanner>
        {scroll ? (
          <CategoryBarSticky
            category={category}
            setCategory={(item: string) => setCategory(item)}
          />
        ) : (
          <CategoryBar
            category={category}
            setCategory={(item: string) => setCategory(item)}
          />
        )}
      </S.HeaderWrapper>
      <S.ListWrapper>
        <S.ProductWriteBtn>상품등록</S.ProductWriteBtn>
        <S.SearchBoxMobile>
          <S.SearchInput type="text" placeholder="검색" />
          <S.SearchOutline />
        </S.SearchBoxMobile>
        <S.ListHeaderBox>
          <S.ListCount>
            총 <span>20</span>개의 상품이 있습니다.
          </S.ListCount>
          <S.SelectBox
            showSearch
            placeholder="선택"
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "등록일",
              },
              {
                value: "lucy",
                label: "낮은가격",
              },
              {
                value: "tom",
                label: "높은가격",
              },
              {
                value: "tom",
                label: "사용후기",
              },
            ]}
          />
        </S.ListHeaderBox>
        <S.ListContentsBox>
          {data?.fetchProducts.map((el, idx) => (
            <S.ProductItemBox
              id={el.product_id}
              onClick={onClickMoveToDetail}
              key={idx}
            >
              <S.ListImg src="/landing/recycle.png" alt="상품이미지" />
              <S.ListProductInfo>
                <S.ListProductName>{el.name}</S.ListProductName>
                <S.ListProductPrice>{el.price}</S.ListProductPrice>
                <S.ListProductBtnBar>
                  <span>
                    <S.ListChatBtn />{" "}
                    <S.BtnBarText>{el.commentCount}</S.BtnBarText>
                  </span>
                  <span>
                    <S.ListWishBtn />{" "}
                    <S.BtnBarText>{el.wishListCount}</S.BtnBarText>
                  </span>
                  <span>
                    <S.ListBasketBtn />
                  </span>
                </S.ListProductBtnBar>
              </S.ListProductInfo>
            </S.ProductItemBox>
          ))}
        </S.ListContentsBox>
        <S.ListPagination>
          <S.PageNationLeftArrow />
          <S.Page>1</S.Page>
          <S.Page>2</S.Page>
          <S.Page>3</S.Page>
          <S.Page>4</S.Page>
          <S.Page>5</S.Page>
          <S.PageNationRightArrow />
        </S.ListPagination>
      </S.ListWrapper>
    </>
  );
}
