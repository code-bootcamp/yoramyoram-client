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
  const [list, setList] = useState([]);
  const { data } = useFetchProducts();
  const { onClickPage } = useFetchProducts();
  const { refetch } = useFetchProducts();
  
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

  const onLoadList = (data:any) =>{
    setList(data);
  }
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
  };

  
  const parentFunction = (x:any) => {
    let temp: any = [...list];
    temp = x?.searchProducts
    setList(temp);
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.ListBanner>Yoram Yoram Shop</S.ListBanner>
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
        <S.ProductWriteBtn onClick={onClickProductSubmit}>
          상품등록
        </S.ProductWriteBtn>
        {/* <S.SearchBoxMobile>
          <S.SearchInput type="text" placeholder="검색" onChange={onChangeKeyword}/>
          <S.SearchOutline />
        </S.SearchBoxMobile> */}

        {/* <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        /> */}
        <S.ListHeaderBox>
          <S.ListCount>
            총 <span>{list?.length}</span>개의 상품이 있습니다.
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
