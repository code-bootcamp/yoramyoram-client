import React from "react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import * as S from "./ProductList.styles";
import _, { isArray } from "lodash";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";
import { useRecoilState } from "recoil";
import { MoveToPageState, selectedState } from "../../../../commons/stores";

export default function CategoryBar({
  setCategory,
  category,
  parentFunction,
  refetch,
  refetchCategory,
  refetchSearch,
  refetchCategoryCount,
}: // selected,
{
  setCategory: (item: string) => void;
  category: string;
  parentFunction: () => void;
  refetch: any;
  refetchCategory: (cateId: string) => void;
  Search: (word: string) => void;
  refetchCategoryCount: (cateId: string) => void;
  // selected?: string;
}) {
  const [keyword, setKeyword] = useState("");
  const { data: searchResult } = useSearchProducts(keyword);

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

  const handleOnKeyPress = (e: any) => {
    if (e.key === "Enter") {
      refetchSearch(keyword);
      parentFunction(searchResult);
      setCategory("전체");
    }
  };

  return (
    <S.CategoryBar>
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
          <S.SearchInput
            type="text"
            placeholder="검색"
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

    // select
    // const [select, setSelect] = useRecoilState(selectedState);

    const onClickCategory = (id: string, title: string) => () => {
      refetchCategory(id);
      setCategory(title);
      refetchCategoryCount(id);
    };

    useEffect(() => {
      if (moveToPage === "Kitchen") {
        refetchCategory("70710037-9402-4665-aff0-ad3f0c68f364");
        setCategory("주방");
        refetchCategoryCount("70710037-9402-4665-aff0-ad3f0c68f364");
      } else if (moveToPage === "Life") {
        refetchCategory("fd798d30-4809-4dfa-961f-9ef7620826f4");
        setCategory("생활");
        refetchCategoryCount("fd798d30-4809-4dfa-961f-9ef7620826f4");
      } else if (moveToPage === "Bathroom") {
        refetchCategory("6a7c5ceb-3440-4878-ac26-d1e8f69c94cc");
        setCategory("욕실");
        refetchCategoryCount("6a7c5ceb-3440-4878-ac26-d1e8f69c94cc");
      } else if (moveToPage === "Woman") {
        refetchCategory("e1b97aef-5520-4d41-9363-4bf250ddf98a");
        setCategory("여성용품");
        refetchCategoryCount("e1b97aef-5520-4d41-9363-4bf250ddf98a");
      } else if (moveToPage === "Pet") {
        refetchCategory("a0087668-4deb-4393-ba3c-53064c6908b3");
        setCategory("반려동물");
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
