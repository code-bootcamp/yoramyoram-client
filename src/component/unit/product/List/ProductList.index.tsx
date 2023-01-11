import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_COUNT,
} from "../../../commons/hooks/queries/useFetchProducts";
import CategoryBar from "./CategoryBar";
import CategoryBarSticky from "./CategoryBarSticky";
import { PriceReg } from "../../../../commons/library/util";

import * as S from "./ProductList.styles";

import { IProductListUIProps } from "./ProductList.types";
import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsArgs,
  IQueryFetchProductsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/queries/useFetchLoginUser";

export default function ProductList(props: IProductListUIProps) {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [category, setCategory] = useState<string>("주방");
  const [list, setList] = useState([]);
  const [admin, setAdmin] = useState<string>("");
  const { data: user } = useQuery(FETCH_LOGIN_USER);

  useEffect(() => {
    setAdmin(user?.fetchLoginUser?.role);
  }, [user]);

  //PAGINATION
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables: {
      page: 1,
    },
  });

  const { data: dataProductsCount } = useQuery<
    Pick<IQuery, "fetchProductsCount">,
    IQueryFetchProductsCountArgs
  >(FETCH_PRODUCTS_COUNT);

  console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음
  console.log(data?.fetchProducts);
  console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음

  console.log(data);
  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onClickProductSubmit = () => {
    router.push("/products/new");
  };

  useEffect(() => {
    onLoadList(data?.fetchProducts);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [data]);

  const onLoadList = (data: any) => {
    setList(data);
  };
  const handleScroll = () => {
    if (window.scrollY >= 226) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // 임시용
  const dummyData = new Array(20).fill(0);
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };

  const parentFunction = (x: any) => {
    let temp: any = [...list];
    temp = x?.searchProducts;
    setList(temp);
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.ListBanner>
          <S.BannerTitle>Yoram Yoram Shop</S.BannerTitle>
          <S.BannerSubTxt>
            Yoram Yoram과 함께 초록색 소비를 시작해 보세요.
          </S.BannerSubTxt>
        </S.ListBanner>

        {scroll ? (
          <CategoryBarSticky
            category={category}
            setCategory={(item: string) => setCategory(item)}
            parentFunction={parentFunction}
          />
        ) : (
          <CategoryBar
            category={category}
            setCategory={(item: string) => setCategory(item)}
            parentFunction={parentFunction}
          />
        )}
      </S.HeaderWrapper>
      <S.ListWrapper>
        <S.ProductWriteBtn onClick={onClickProductSubmit} admin={admin}>
          상품등록
        </S.ProductWriteBtn>

        <S.ListHeaderBox>
          <S.ListCount>
            총 <span>{dataProductsCount?.fetchProductsCount}</span>개의 상품이
            있습니다.
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
                value: "sortByPriceASC",
                label: "낮은가격순",
              },
              {
                value: "sortByPriceDESC",
                label: "높은가격순",
              },
              {
                value: "sortByCreatedAtASC",
                label: "최신순",
              },
              {
                value: "sortByCreatedAtDESC",
                label: "오래된순",
              },
              {
                value: "sortByCommentsDESC",
                label: "후기많은순",
              },
            ]}
          />
        </S.ListHeaderBox>
        <S.ListContentsBox>
          {list?.map((el, idx) => (
            <S.ProductItemBox
              id={el.product_id}
              onClick={onClickMoveToDetail}
              key={idx}
            >
              <S.ListImgWrap>
                <S.ListImg
                  src={`https://storage.googleapis.com/${el.productImages[0]?.url}`}
                  alt="상품이미지"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/noImage.png";
                  }}
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

        <Pagination01
          refetch={refetch}
          count={dataProductsCount?.fetchProductsCount}
        />
      </S.ListWrapper>
    </>
  );
}
