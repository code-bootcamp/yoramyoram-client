import React from "react";
import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import * as S from "./ProductList.styles";
import _, { isArray } from "lodash";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";
import { useRecoilState } from "recoil";
import {
  IsSearchState,
  MoveToPageState,
  searchProductsState,
  selectedState,
} from "../../../../commons/stores";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

// interface IE {
//   refetchSearch: (keyword: string) => void;
//   parentFunction: () => void;
//   setCategory: () => void;
// }

interface ISearchResult {
  name: string;
  price: number;
  productImages: IProductImages;
  porduct_id: string;
}

interface IProductImages {
  url: string;
}

export default function CategoryBar({
  setCategory,
  category,
  parentFunction,
  // refetch,
  refetchCategory,
  // refetchSearch,
  refetchCategoryCount,
}: {
  setCategory: (item: string) => void;
  category: string;
  parentFunction: (
    searchResult: Pick<IQuery, "searchProducts"> | undefined
  ) => void;
  // refetch: (
  //   variables?: Partial<IQueryFetchProductsArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchProducts">>>;
  refetchCategory: (cateId: string) => void;
  // Search: (word: string) => void;
  refetchCategoryCount: (cateId: string) => void;
}) {
  const [keyword, setKeyword] = useState("");
  const { data: searchResult, refetchSearch } = useSearchProducts(keyword);
  const [, setSearchProducts] = useRecoilState(searchProductsState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);

  // const [select, setSelect] = useRecoilState(selectedState);
  // useEffect(() => {
  //   setSelect(selected);
  // }, [selected]);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    getDBounce(event.currentTarget.value);
  };

  const getDBounce = _.debounce((keyword) => {
    setKeyword(keyword);
  });

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      refetchSearch(keyword);
      parentFunction(searchResult);
      setCategory("??????");
      setSearchProducts(searchResult?.searchProducts.length ?? 0);
      setIsSearch(true);
    }
  };

  return (
    <S.CategoryBar>
      <S.CategoryBox>
        <CategoryItem
          title="??????"
          id=""
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="??????"
          id="70710037-9402-4665-aff0-ad3f0c68f364"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="??????"
          id="fd798d30-4809-4dfa-961f-9ef7620826f4"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="??????"
          id="6a7c5ceb-3440-4878-ac26-d1e8f69c94cc"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="????????????"
          id="e1b97aef-5520-4d41-9363-4bf250ddf98a"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="????????????"
          id="a0087668-4deb-4393-ba3c-53064c6908b3"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <S.SearchBox>
          <S.SearchInput
            type="text"
            placeholder="??????"
            onChange={onChangeKeyword}
            onKeyPress={handleOnKeyPress}
          />
          <S.SearchOutline />
        </S.SearchBox>
      </S.CategoryBox>
    </S.CategoryBar>
  );

  function CategoryItem({
    title,
    id,
    refetchCategory,
    refetchCategoryCount,
  }: {
    title: string;
    id: string;
    refetchCategory: (cateId: string) => void;
    refetchCategoryCount: (cateId: string) => void;
  }) {
    const isActive = category === title;
    const [moveToPage, setMoveToPage] = useRecoilState(MoveToPageState);
    const [isSearch, setIsSearch] = useRecoilState(IsSearchState);

    // select
    // const [select, setSelect] = useRecoilState(selectedState);

    const onClickCategory = (id: string, title: string) => () => {
      refetchCategory(id);
      setCategory(title);
      refetchCategoryCount(id);
      setIsSearch(false);
    };

    useEffect(() => {
      if (moveToPage === "Kitchen") {
        refetchCategory("70710037-9402-4665-aff0-ad3f0c68f364");
        setCategory("??????");
        refetchCategoryCount("70710037-9402-4665-aff0-ad3f0c68f364");
      } else if (moveToPage === "Life") {
        refetchCategory("fd798d30-4809-4dfa-961f-9ef7620826f4");
        setCategory("??????");
        refetchCategoryCount("fd798d30-4809-4dfa-961f-9ef7620826f4");
      } else if (moveToPage === "Bathroom") {
        refetchCategory("6a7c5ceb-3440-4878-ac26-d1e8f69c94cc");
        setCategory("??????");
        refetchCategoryCount("6a7c5ceb-3440-4878-ac26-d1e8f69c94cc");
      } else if (moveToPage === "Woman") {
        refetchCategory("e1b97aef-5520-4d41-9363-4bf250ddf98a");
        setCategory("????????????");
        refetchCategoryCount("e1b97aef-5520-4d41-9363-4bf250ddf98a");
      } else if (moveToPage === "Pet") {
        refetchCategory("a0087668-4deb-4393-ba3c-53064c6908b3");
        setCategory("????????????");
        refetchCategoryCount("a0087668-4deb-4393-ba3c-53064c6908b3");
      }
      setMoveToPage("");
    }, [moveToPage]);

    if (isActive) return <S.CategoryBtnActive>{title}</S.CategoryBtnActive>;
    else {
      return (
        <S.CategoryBtn onClick={onClickCategory(id, title)}>
          {title}
        </S.CategoryBtn>
      );
    }
  }
}
