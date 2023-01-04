import * as S from "./ProductReview.styles";
import React from "react";
import { Rate } from "antd";
import { CloseOutlined, FormOutlined } from "@ant-design/icons";
export default function ProductReview() {
  const dummyData = new Array(6).fill(0);

  return (
    <S.ReviewWrapper>
      <S.ReviewHeader>
        <S.HeaderText>상품을 구매하신 분들이 작성하신 리뷰입니다.</S.HeaderText>
        <div style={{ paddingBottom: "25px" }}>
          <S.ReviewWriteBtn>구매평 작성</S.ReviewWriteBtn>
        </div>
      </S.ReviewHeader>
      {dummyData.map((el, idx) => (
        <S.ReviewInnerWrapper key={idx}>
          <S.ReviewInner>
            <S.ReviewTop>
              <S.ReviewTopLeft>
                <Rate />
                <S.OptionText>[옵션] 색상: 화이트</S.OptionText>
              </S.ReviewTopLeft>
              <S.ReviewTopRight>
                <S.ReviewBtnWrapper>
                  <FormOutlined />
                  <CloseOutlined style={{ paddingLeft: "27px" }} />
                </S.ReviewBtnWrapper>
              </S.ReviewTopRight>
            </S.ReviewTop>

            <S.ReviewDateWrapper>
              <S.ReviewText>
                죄책감 없이 쓸 수 있어서 좋네요! ㅠㅠ 수납력도 좋아요~~ 화이트
                버전 말고 다양한 컬러가 더 많았으면 좋겠어요! 재구매 할게요!
              </S.ReviewText>
              <S.ReviewRelatedWrapper>
                <div>yoram****</div>
                <div>2022-12-26</div>
              </S.ReviewRelatedWrapper>
            </S.ReviewDateWrapper>

            {/* <S.ReviewCommentBtn>
              <button>댓글</button>1
            </S.ReviewCommentBtn> */}
          </S.ReviewInner>
        </S.ReviewInnerWrapper>
      ))}
      <S.ListPagenation>
        <S.PageNationLeftArrow />
        <S.Page>1</S.Page>
        <S.Page>2</S.Page>
        <S.Page>3</S.Page>
        <S.Page>4</S.Page>
        <S.Page>5</S.Page>
        <S.PageNationRightArrow />
      </S.ListPagenation>
    </S.ReviewWrapper>
  );
}
