import React from "react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import * as S from "./ProductList.styles";
import _, { isArray } from "lodash";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";

export default function CategoryBarSticky({
  setCategory,
  category,
  // parentFunction,
  // refetch,
  refetchCategory,
  // refetchSearch,
  refetchCategoryCount,
}: {
  setCategory: (item: string) => void;
  category: string;
  // parentFunction: () => void;
  // refetch: any;
  refetchCategory: (cateId: string) => void;
  // Search: (word: string) => void;
  refetchCategoryCount: (cateId: string) => void;
  // selected?: string;
}) {
  const [keyword, setKeyword] = useState("");
  const { data: searchResult } = useSearchProducts(keyword);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    getDBounce(event.currentTarget.value);
  };

  const getDBounce = _.debounce((value) => {
    // void data({search: value, page:1});
    setKeyword(value);
  });

  // const handleOnKeyPress = (e: any) => {
  //   if (e.key === "Enter") {
  //     parentFunction(searchResult);
  //   }
  // };

  return (
    <S.CategoryBarSticky>
      <S.CategoryBox>
        <CategoryItem
          title="전체"
          id=""
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="주방"
          id="70710037-9402-4665-aff0-ad3f0c68f364"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="생활"
          id="fd798d30-4809-4dfa-961f-9ef7620826f4"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="욕실"
          id="6a7c5ceb-3440-4878-ac26-d1e8f69c94cc"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="여성용품"
          id="e1b97aef-5520-4d41-9363-4bf250ddf98a"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <CategoryItem
          title="반려동물"
          id="a0087668-4deb-4393-ba3c-53064c6908b3"
          refetchCategory={refetchCategory}
          refetchCategoryCount={refetchCategoryCount}
        />
        <S.SearchBox>
          {/* <S.SearchInput type="text" placeholder="검색" />
          <S.SearchOutline /> */}
        </S.SearchBox>
      </S.CategoryBox>
    </S.CategoryBarSticky>
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
    const onClickCategory = (id: string, title: string) => () => {
      refetchCategory(id);
      setCategory(title);
      refetchCategoryCount(id);
    };

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
