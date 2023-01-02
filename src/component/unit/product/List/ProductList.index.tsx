import {
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import CategoryBar from "./CategoryBar";
import * as S from "./ProductList.styles";
export default function ProductList() {
  const [scroll, setScroll] = useState(false);
  const [category, setCategory] = useState<string>("주방");
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 80px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      // 스크롤이 80px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  // 임시용
  const dummyData = new Array(20).fill(0);

  return (
    <>
      <S.HeaderWrapper>
        <S.ListBanner>Yoram Yoram Shop</S.ListBanner>
        {scroll ? (
          <S.CategoryStickyBtn
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
          {dummyData.map((el, idx) => (
            <S.ProductItemBox key={idx}>
              <S.ListImg src="/landing/recycle.png" alt="상품이미지" />
              <S.ListProductInfo>
                <S.ListProductName>천연물방울 수세미(3개입)</S.ListProductName>
                <S.ListProductPrice>9,900원</S.ListProductPrice>
                <S.ListProductBtnBar>
                  <span>
                    <S.ListChatBtn /> <S.BtnBarText>45</S.BtnBarText>
                  </span>
                  <span>
                    <S.ListWishBtn /> <S.BtnBarText>28</S.BtnBarText>
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
