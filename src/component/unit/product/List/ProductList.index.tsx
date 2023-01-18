import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
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
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationAddWishlistArgs,
  IProduct,
  IQuery,
  IQueryFetchProductsArgs,
  IQueryFetchProductsCountArgs,
  IQuerySortByPriceAscArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/queries/useFetchLoginUser";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";
import {
  SORT_BY_PRICE_ASC,
  usePriceASC,
} from "../../../commons/hooks/queries/useSortByPriceASC";
import { useCommentsDESC } from "../../../commons/hooks/queries/useSortByCommentsDESC";
import { useCommentsASC } from "../../../commons/hooks/queries/useSortByCommentsASC";
import { usePriceDESC } from "../../../commons/hooks/queries/useSortByPriceDESC";
import { FETCH_PRODUCT } from "../../../commons/hooks/queries/useFetchProduct";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { ADD_WISHLIST } from "../../../commons/hooks/mutation/useAddWishlist";
import { IsSearchState, searchProductsState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { Modal } from "antd";

interface IList {
  commentCount: number;
  description: string;
  detailContent: string;
  etc1Name: string;
  etc1Value: string;
  etc2Name: string;
  etc2Value: string;
  price: string;
  name: string;
  product_id: string;
  productImages: IProductImage[];
  wishListCount: number;
}

interface IProductImage {
  url: string;
}

export default function ProductList() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [category, setCategory] = useState<string>("전체");
  const [list, setList] = useState([]);
  const [admin, setAdmin] = useState<string>("");
  const [selected, setSelected] = useState("");
  const [activedPage, setActivedPage] = useState(1);
  const { data: user } = useQuery(FETCH_LOGIN_USER);
  const [isWish, setIsWish] = useState(false);
  const [searchProducts, setSearchProducts] =
    useRecoilState(searchProductsState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);

  //FIXME: sort 기능구현
  // const { CommentsASC, CommentsASCRefetch } = useCommentsASC();
  // const { CommentsDESC, CommentsDESCRefetch } = useCommentsDESC();
  // const { PriceASC, PriceASCRefetch } = usePriceASC();
  // const { PriceDESC, PriceDESCRefetch } = usePriceDESC();

  useEffect(() => {
    setAdmin(user?.fetchLoginUser?.role);
  }, [user]);

  useEffect(() => {
    setIsWish(false);
  });

  // console.log(user?.fetchLoginUser);
  // selectBox
  // const onChangeSelectBox = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setSelected(e.currentTarget.value);
  // };

  // FIXME: sort 기능 구현
  // useEffect(() => {
  //   if (selected === "sortByCreatedAtASC") {
  //     return onLoadList(data?.fetchProducts);
  //   } else if (selected === "sortByPriceASC") {
  //     return onLoadList(PriceASC?.sortByPriceASC);
  //   } else if (selected === "sortByPriceDESC") {
  //     return onLoadList(PriceDESC?.sortByPriceDESC);
  //   } else if (selected === "sortByCommentsASC") {
  //     return onLoadList(CommentsASC?.sortByCommentsASC);
  //   } else if (selected === "sortByCommentsDESC") {
  //     return onLoadList(CommentsDESC?.sortByCommentsDESC);
  //   }
  // }, [selected]);

  //

  //PAGINATION

  const [addWishlist] = useMutation<
    Pick<IMutation, "addWishlist">,
    IMutationAddWishlistArgs
  >(ADD_WISHLIST);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables: {
      page: activedPage,
      cateId: "",
    },
  });

  const { data: dataProductsCount, refetch: countProduct } = useQuery<
    Pick<IQuery, "fetchProductsCount">,
    IQueryFetchProductsCountArgs
  >(FETCH_PRODUCTS_COUNT, {
    variables: {
      cateId: "",
    },
  });
  // console.log(dataProductsCount?.fetchProductsCount);

  // console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음
  // console.log(data?.fetchProducts);
  // console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음

  // console.log(data);

  const onSearch = (value: string) => {
    // console.log("search:", value);
  };

  const onClickProductSubmit = () => {
    router.push("/products/new");
  };

  const refetchCategory = (cateId: string) => {
    void refetch({ page: 1, cateId: cateId });
  };

  const refetchCategoryCount = (cateId: string) => {
    void countProduct({ cateId: cateId });
  };

  useEffect(() => {
    onLoadList(data?.fetchProducts);
    // console.log("111111111111111");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const onClickAddWishlist = async (e: MouseEvent) => {
    if (!user) return Modal.warning({ content: "로그인해주세요!" });

    try {
      await addWishlist({
        variables: {
          createProductWishInput: {
            productId: e.currentTarget.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCTS,
            variables: {
              page: activedPage,
              cateId: "",
            },
          },
          {
            query: FETCH_PRODUCT,
            variables: {
              productId: e.currentTarget.id,
            },
          },
          {
            query: FETCH_MY_WISHLIST,
            variables: {
              page: 1,
            },
          },
        ],
      });

      // if(list.map(el)=> el.product_id === wishlist){
      //   console.log("qqq")
      // }
    } catch {
      alert("error");
    }
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };

  const parentFunction = (
    value: Pick<IQuery, "searchProducts"> | undefined
  ) => {
    let temp: any = [...list];
    temp = value?.searchProducts;
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
            refetchCategory={refetchCategory}
            refetchCategoryCount={refetchCategoryCount}
            // selected={selected}
          />
        ) : (
          <CategoryBar
            category={category}
            setCategory={(item: string) => setCategory(item)}
            parentFunction={parentFunction}
            refetchCategory={refetchCategory}
            refetchCategoryCount={refetchCategoryCount}
            // selected={selected}
          />
        )}
      </S.HeaderWrapper>
      <S.ListWrapper>
        <S.ProductWriteBtn onClick={onClickProductSubmit} admin={admin}>
          상품등록
        </S.ProductWriteBtn>

        <S.ListHeaderBox>
          <S.ListCount>
            {/* 총 <span>{dataProductsCount?.fetchProductsCount}</span>개의 상품이 */}
            총{" "}
            <span>
              {isSearch
                ? searchProducts
                : dataProductsCount?.fetchProductsCount}
            </span>
            개의 상품이 있습니다.
          </S.ListCount>

          {/* FIXME: 검색부분 팀플끝나고 구현! */}
          {/* <S.SelectBox onChange={onChangeSelectBox} value={selected}>
            <option value="sortByCreatedAtASC">최신순</option>
            <option value="sortByPriceASC">낮은가격순</option>
            <option value="sortByPriceDESC">높은가격수</option>
            <option value="sortByCommentsDESC">후기많은순</option>
            <option value="sortByCommentsASC">후기낮은순</option>
          </S.SelectBox> */}
        </S.ListHeaderBox>
        <S.ListContentsBox>
          {list?.map((el: IList, idx: number) => (
            <S.ProductItemBox>
              <S.ListImgWrap>
                <S.ListImg
                  id={el.product_id}
                  onClick={onClickMoveToDetail}
                  key={idx}
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
                    <S.ListChatBtn />
                    <S.BtnBarText>{el.commentCount}</S.BtnBarText>
                  </span>

                  <span
                    style={{ cursor: "pointer" }}
                    id={el.product_id}
                    onClick={onClickAddWishlist}
                  >
                    <S.ListWishBtn />
                    <S.BtnBarText>{el.wishListCount}</S.BtnBarText>
                  </span>
                </S.ListProductBtnBar>
              </S.ListProductInfo>
            </S.ProductItemBox>
          ))}
        </S.ListContentsBox>

        <Pagination01
          activedPage={activedPage}
          setActivedPage={setActivedPage}
          selected={selected}
          refetch={refetch}
          category={category}
          // commentsASCRefetch={CommentsASCRefetch}
          // commentsDESCRefetch={CommentsDESCRefetch}
          // priceASCRefetch={PriceASCRefetch}
          // priceDESCRefetch={PriceDESCRefetch}
          count={dataProductsCount?.fetchProductsCount}
        />
      </S.ListWrapper>
    </>
  );
}
