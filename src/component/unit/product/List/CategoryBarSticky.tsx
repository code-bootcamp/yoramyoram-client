import React from "react";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import * as S from "./ProductList.styles";

export default function CategoryBarSticky({
  setCategory,
  category,
}: {
  setCategory: (item: string) => void;
  category: string;
}) {
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
          <S.SearchInput type="text" placeholder="검색" />
          <S.SearchOutline />
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
