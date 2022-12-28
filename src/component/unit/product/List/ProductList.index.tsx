import {
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as S from "./ProductList.styles";
export default function ProductList() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // 임시용
  const qqq = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <S.HeaderWrapper>
        <S.ListBanner>Yoram Yoram Shop</S.ListBanner>
        <S.CategoryBar>
          <S.CategoryBox>
            <S.CategoryBtn>주방</S.CategoryBtn>
            <S.CategoryBtn>생활</S.CategoryBtn>
            <S.CategoryBtn>욕실</S.CategoryBtn>
            <S.CategoryBtn>여성용품</S.CategoryBtn>
            <S.CategoryBtn>반려동물</S.CategoryBtn>
            <S.SearchBox>
              <S.SearchInput type="text" placeholder="검색" />
              <S.SearchOutline />
            </S.SearchBox>
          </S.CategoryBox>
        </S.CategoryBar>
      </S.HeaderWrapper>
      <S.ListWrapper>
        <S.ProductWriteBtn>상품등록</S.ProductWriteBtn>
        <S.ListHeaderBox>
          <S.ListCount>
            총 <span>20</span>개의 상품이 있습니다.
          </S.ListCount>
          <S.SelectBox
            showSearch
            placeholder="선택"
            optionFilterProp="children"
            onChange={onChange}
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
          {qqq.map((el, idx) => (
            <S.ProductItemBox key={idx}>
              <S.ListImg src="/landing/recycle.png" alt="상품이미지" />
              <S.ListProductInfo>
                <S.ListProductName>천연물방울 수세미(3개입)</S.ListProductName>
                <S.ListProductPrice>9,900원</S.ListProductPrice>
                <S.ListProductBtnBar>
                  <span>
                    <S.ListChatBtn /> 45
                  </span>
                  <span>
                    <S.ListWishBtn /> 28{" "}
                  </span>
                  <span>
                    <S.ListBasketBtn />
                  </span>
                </S.ListProductBtnBar>
              </S.ListProductInfo>
            </S.ProductItemBox>
          ))}
        </S.ListContentsBox>
        <S.ListPagenation>
          <S.PageNationLeftArrow />
          <S.Page>1</S.Page>
          <S.Page>2</S.Page>
          <S.Page>3</S.Page>
          <S.Page>4</S.Page>
          <S.Page>5</S.Page>
          <S.PageNationRightArrow />
        </S.ListPagenation>
      </S.ListWrapper>
    </>
  );
}
