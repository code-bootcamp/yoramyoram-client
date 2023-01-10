import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useFetchProducts } from "../../../commons/hooks/queries/useFetchProducts";
import CategoryBar from "./CategoryBar";
import CategoryBarSticky from "./CategoryBarSticky";
import { PriceReg } from "../../../../commons/library/util";

import * as S from "./ProductList.styles";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";
import _, { isArray } from "lodash";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { IProductListUIProps } from "./ProductList.types";

export default function ProductList(props: IProductListUIProps) {
  const [startPage, setStartPage] = useState(1);
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [category, setCategory] = useState<string>("주방");

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onClickProductSubmit = () => {
    router.push("/products/new");
  };
  const { data } = useFetchProducts();
  const { data: Search } = useSearchProducts();
  const { onClickPage } = useFetchProducts();
  const { refetch } = useFetchProducts();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [data]);

  const handleScroll = () => {
    if (window.scrollY >= 226) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const onClickPrevPage = () => {
    setStartPage(startPage - 5);
    void refetch({ page: startPage - 5 });
  };

  const onClickNextPage = () => {
    setStartPage(startPage + 5);
    void refetch({ page: startPage + 5 });
  };

  // 임시용
  const dummyData = new Array(20).fill(0);
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);

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
        <S.ProductWriteBtn onClick={onClickProductSubmit}>
          상품등록
        </S.ProductWriteBtn>
        {/* <S.SearchBoxMobile>
          <S.SearchInput type="text" placeholder="검색" />
          <S.SearchOutline />
        </S.SearchBoxMobile> */}

        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
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
          {data?.fetchProducts?.map((el, idx) => (
            <S.ProductItemBox
              id={el.product_id}
              onClick={onClickMoveToDetail}
              key={idx}
            >
              <S.ListImgWrap>
                <S.ListImg
                  src={`https://storage.googleapis.com/${el.productImages[0]?.url}`}
                  alt="상품이미지"
                />
              </S.ListImgWrap>
              <S.ListProductInfo>
                <S.ListProductName>{el.name}</S.ListProductName>
                <S.ListProductPrice>{PriceReg(el.price)}원</S.ListProductPrice>
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
          <S.PageNationLeftArrow onClick={onClickPrevPage} />
          {new Array(5).fill(1).map((_, index) => (
            <S.Page
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </S.Page>
          ))}
          {/* <S.Page>2</S.Page>
          <S.Page>3</S.Page>
          <S.Page>4</S.Page>
          <S.Page>5</S.Page> */}
          <S.PageNationRightArrow onClick={onClickNextPage} />
        </S.ListPagination>
      </S.ListWrapper>
    </>
  );
}
