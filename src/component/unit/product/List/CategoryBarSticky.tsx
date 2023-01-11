import React from "react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import * as S from "./ProductList.styles";
import _, { isArray } from "lodash";
import { useSearchProducts } from "../../../commons/hooks/queries/useSearchProducts";

export default function CategoryBarSticky({
  setCategory,
  category,
  parentFunction
}: {
  setCategory: (item: string) => void;
  category: string;
  parentFunction: string[];
}) {
  const [keyword, setKeyword] = useState('');
  const { data: searchResult } = useSearchProducts(keyword);

  const onChangeKeyword = (event:ChangeEvent<HTMLInputElement>) => {
      getDBounce(event.currentTarget.value);
    };

    const getDBounce = _.debounce((value)=>{
      // void data({search: value, page:1});
      setKeyword(value);
    })

    const handleOnKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      parentFunction(searchResult);
    }

  };

  return (
    <S.CategoryBarSticky>
      <S.CategoryBox>
        <CategoryItem title="전체" />
        <CategoryItem title="주방" />
        <CategoryItem title="생활" />
        <CategoryItem title="욕실" />
        <CategoryItem title="여성용품" />
        <CategoryItem title="반려동물" />
        <S.SearchBox>
          {/* <S.SearchInput type="text" placeholder="검색" />
          <S.SearchOutline /> */}
        </S.SearchBox>
      </S.CategoryBox>
    </S.CategoryBarSticky>
  );

  function CategoryItem({ title }: { title: string }) {
    const isActive = category === title;

    if (isActive) return <S.CategoryBtnActive>{title}</S.CategoryBtnActive>;
    else {
      return (
        <S.CategoryBtn onClick={() => setCategory(title)}>
          {title}
        </S.CategoryBtn>
      );
    }
  }
}
