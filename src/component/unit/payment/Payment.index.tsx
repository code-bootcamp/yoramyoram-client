import * as S from "./Payment.styles";

export default function Payment() {
  return (
    <div style={{ backgroundColor: "#FCFBFA" }}>
      <S.Wrapper>
        <S.Title>Checkout</S.Title>
        <S.FlexBoxWrap>
          <S.Left>
            <div>
              <S.SubTitle>배송지 정보</S.SubTitle>
              <S.ShippingInfoBox>
                <S.RecipientBox>
                  <S.ShippingInfoTitle>받으시는 분</S.ShippingInfoTitle>
                  <S.RecipientInput type="text" />
                </S.RecipientBox>
                <S.RecipientBox>
                  <S.ShippingInfoTitle>휴대폰 번호</S.ShippingInfoTitle>
                  <S.PhoneNumberBox>
                    <S.PhoneNumberSelect>
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                    </S.PhoneNumberSelect>
                    <S.PhoneNumberInput type="text" />
                    <S.PhoneNumberInput type="text" />
                  </S.PhoneNumberBox>
                </S.RecipientBox>
                <S.RecipientBox>
                  <S.ShippingInfoTitle>배송 주소</S.ShippingInfoTitle>
                  <S.AddressBox>
                    <S.ZipcodeBox>
                      <S.ZipcodeInput type="text" placeholder="06243" />{" "}
                      <S.ZipcodeBtn>우편번호 찾기</S.ZipcodeBtn>
                    </S.ZipcodeBox>
                    <div>
                      <S.AddressInput
                        type="text"
                        placeholder="경기도 00시 00로 00동 00아파트"
                      />{" "}
                      <S.AddressDetailInput
                        type="text"
                        placeholder="111동 1111호"
                      />
                    </div>
                  </S.AddressBox>
                </S.RecipientBox>
              </S.ShippingInfoBox>
            </div>
            <S.ProductWapper>
              <S.SubTitle>주문상품</S.SubTitle>
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
                        <img src="/productDetail/purchase.png"></img>
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
            </S.ProductWapper>
            <S.Bargan>
              <S.SubTitle>할인받기</S.SubTitle>
              <S.ShippingInfoBox>
                <S.DiscountBox>
                  <S.DiscountInfoTitle>결제 예정금액</S.DiscountInfoTitle>
                  <S.ExpectedPrice>18,400</S.ExpectedPrice>원
                </S.DiscountBox>
                <S.DiscountMobileBox>
                  <S.DiscountPointBox>
                    <S.DiscountInfoTitle>YORAM POINT</S.DiscountInfoTitle>
                    <S.YoramPointInput type="text" placeholder="0" />{" "}
                    <S.YoramPointUnit>P</S.YoramPointUnit>{" "}
                  </S.DiscountPointBox>
                  <div>
                    <S.UsePointCheck type="checkbox" />
                    모두 사용하기
                    <S.RestPoint>잔여포인트: 2,850P</S.RestPoint>
                  </div>
                </S.DiscountMobileBox>
              </S.ShippingInfoBox>
            </S.Bargan>
          </S.Left>
          <S.Right>
            <S.RightTitle>최종결제금액</S.RightTitle>
            <S.PriceWrap>
              <S.SumProductBox>
                <S.PriceBox>
                  <S.BoxTitle>총 상품 금액</S.BoxTitle>
                  <S.SumProductPrice>
                    18,400 <span>원</span>
                  </S.SumProductPrice>
                </S.PriceBox>
                <S.PriceBox>
                  <S.BoxTitle>YORAM POINT</S.BoxTitle>
                  <S.SumProductPrice>
                    - 0 <span>원</span>
                  </S.SumProductPrice>
                </S.PriceBox>
              </S.SumProductBox>
              <div>
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
              </div>
            </S.PriceWrap>
            <S.PayButton>결제하기</S.PayButton>
          </S.Right>
        </S.FlexBoxWrap>
      </S.Wrapper>
    </div>
  );
}
