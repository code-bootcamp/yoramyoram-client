import * as S from "./Basket.styles";

export default function Basket() {
  return (
    <div style={{ backgroundColor: "#FCFBFA" }}>
      <S.Wrapper>
        <S.Title>Shopping Bag</S.Title>
        <S.FlexBoxWrap>
          <S.Left>
            <S.SubTitle>장바구니 상품(2)</S.SubTitle>
            <S.Table>
              <colgroup>
                <col width="42%"></col>
                <col width="10%"></col>
                <col width="36%"></col>
                <col width="12%"></col>
              </colgroup>
              <S.Thead>
                <S.Tr>
                  <S.Th>상품정보</S.Th>
                  <S.Th>수량</S.Th>
                  <S.Th>가격</S.Th>
                  <S.Th>선택</S.Th>
                </S.Tr>
              </S.Thead>
              <S.Tbody>
                <S.Tr>
                  <S.PrdTd>
                    <S.ImgWrap>
                      <img src="/productDetail/purchase.png" />
                    </S.ImgWrap>
                    <S.PrdDetail>
                      <S.Name>천연소재 파우치</S.Name>
                      <S.Option>옵션: White</S.Option>
                    </S.PrdDetail>
                  </S.PrdTd>
                  <S.Td>1</S.Td>
                  <S.Td>8,500 원</S.Td>
                  <S.Td>
                    <S.Button>삭제 ✕</S.Button>
                  </S.Td>
                </S.Tr>
              </S.Tbody>
            </S.Table>

            <S.MobileList>
              <S.PrdImg>
                <img src="productDetail/purchase.png" />
              </S.PrdImg>
              <S.PrdInfoWrap>
                <S.PrdInfo>
                  <S.PrdName>천연소재 파우치</S.PrdName>
                  <S.PrdOption>옵션: White</S.PrdOption>
                  <S.Quantity>수량: 1</S.Quantity>
                  <S.Price>
                    8,500<span>원</span>
                  </S.Price>
                </S.PrdInfo>
                <S.Delete>✕</S.Delete>
              </S.PrdInfoWrap>
            </S.MobileList>

            <S.GoShop>쇼핑 계속하기</S.GoShop>
          </S.Left>
          <S.Right>
            <S.RightTitle>주문금액</S.RightTitle>
            <S.PriceWrap>
              <S.PriceBox>
                <S.BoxTitle>총 결제 금액</S.BoxTitle>
                <S.SumPrice>
                  18,400 <span>원</span>
                </S.SumPrice>
              </S.PriceBox>
              <S.PointBox>
                <S.PointTitle>적립예정 포인트</S.PointTitle>
                <S.Point>1840 p</S.Point>
              </S.PointBox>
            </S.PriceWrap>
            <S.PayButton>결제하기</S.PayButton>
            <S.MobileBtnWrap>
              <S.GoShopMob>쇼핑 계속하기</S.GoShopMob>
              <S.PayButtonMob>결제하기</S.PayButtonMob>
            </S.MobileBtnWrap>
          </S.Right>
        </S.FlexBoxWrap>
      </S.Wrapper>
    </div>
  );
}
