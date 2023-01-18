import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { Router, useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { optionName, PriceReg } from "../../../commons/library/util";
import {
  IQuery,
  IQueryFetchProductCartArgs,
} from "../../../commons/types/generated/types";
import { useCreatePayment } from "../../commons/hooks/mutation/useCreatePayment";
import { FETCH_LOGIN_USER } from "../../commons/hooks/queries/useFetchLoginUser";
import {
  FETCH_PRODUCTS_CART,
  FETCH_PRODUCTS_CART_TOTAL_AMOUNT,
} from "../../commons/hooks/queries/useFetchProductCart";
import { useFetchUserPoint } from "../../commons/hooks/queries/useFetchUserPoint";
import InfiniteScrollPage from "../../commons/infinite-scroll/01/InfiniteScroll.container";
import * as S from "./Payment.styles";
import { paymentSchema } from "./Payment.validation";

interface IData {
  point?: string;
}

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [addressName, setAddressName] = useState("");
  const [restPoint, setRestPoint] = useState(0);
  // const [point, setPoint] = useState(0);
  const [isPoint, setIsPoint] = useState(false);
  const [usePoint, setUsePoint] = useState(0);

  useEffect(() => {
    setRestPoint(user?.fetchLoginUser?.point);
  }, []);

  const onClickPointTransition = () => {
    setValue("point", user?.fetchLoginUser?.point);
    setIsPoint(true);
  };

  const DeletePoint = () => {
    setValue("point", 0);
    setIsPoint(false);
  };

  const { register, handleSubmit, formState, setValue, watch, getValues } =
    useForm({
      resolver: yupResolver(paymentSchema),
      mode: "onChange",
    });

  //=================================

  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
    } else {
    }
  }, [watchAll]);
  // console.log(watchAll);

  const onChangeUsePoint = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("point", event?.target.value);
  };
  //===================================

  const { data: userPoint } = useFetchUserPoint();
  // console.log(userPoint?.fetchUserPoint?.point);

  const { data: user } = useQuery(FETCH_LOGIN_USER);

  const {
    data: cart,
    refetch,
    fetchMore,
  } = useQuery<Pick<IQuery, "fetchProductCart">, IQueryFetchProductCartArgs>(
    FETCH_PRODUCTS_CART,
    {
      variables: {
        page: 1,
      },
    }
  );

  const { data: dataProductsCartTotalAmount } = useQuery<
    Pick<IQuery, "fetchProductCartTotalAmount">
  >(FETCH_PRODUCTS_CART_TOTAL_AMOUNT);

  // const PhoneFirst = getValues("phoneFirst");
  // const PhoneSecond = getValues("phoneSecond");
  // const PhoneThird = getValues("phoneThird");
  // const phone = PhoneFirst + PhoneSecond + PhoneThird;
  const router = useRouter();

  const { createPayment } = useCreatePayment();
  const createPaymentSubmit = async (data: IData) => {
    try {
      await createPayment({
        variables: {
          point: Number(data.point),
          totalAmount:
            Number(dataProductsCartTotalAmount?.fetchProductCartTotalAmount) -
            Number(data.point),
        },
      });

      Modal.success({ content: "결제가 완료되었습니다!" });
      router.push("/payment_success");
    } catch {
      Modal.error({ content: "결제를 실패했습니다." });
    }
  };

  const onCompleteAddressSearch = (address: Address) => {
    setAddressName(address.address);
    setZipcode(address.zonecode);
    setIsOpen((prev) => !prev);
    setValue("address", address.address);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal
          visible={true}
          onCancel={() => setIsOpen(false)}
          onOk={() => setIsOpen(false)}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <div style={{ backgroundColor: "#FCFBFA" }}>
        <S.Wrapper onSubmit={handleSubmit(createPaymentSubmit)}>
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
                        <S.ZipcodeInput
                          readOnly
                          value={zipcode}
                          type="text"
                          placeholder="06243"
                        />{" "}
                        <S.ZipcodeBtn
                          onClick={onClickAddressSearch}
                          type="button"
                        >
                          우편번호 찾기
                        </S.ZipcodeBtn>
                      </S.ZipcodeBox>
                      <div>
                        <S.AddressInput
                          type="text"
                          placeholder="주소"
                          value={addressName}
                          readOnly
                        />{" "}
                        <S.AddressDetailInput
                          type="text"
                          placeholder="상세주소"
                        />
                      </div>
                    </S.AddressBox>
                  </S.RecipientBox>
                </S.ShippingInfoBox>
              </div>
              <S.ProductWapper>
                <S.SubTitle>주문상품</S.SubTitle>
                <InfiniteScrollPage
                  fetchMore={fetchMore}
                  data={cart}
                  // loader={<h4>Loading...</h4>}
                >
                  <S.Table>
                    <colgroup>
                      <col width="45%"></col>
                      <col width="13%"></col>
                      <col width="21%"></col>
                      <col width="21%"></col>
                    </colgroup>
                    <S.Thead>
                      <S.Tr>
                        <S.Th>상품정보</S.Th>
                        <S.Th>수량</S.Th>
                        <S.Th>가격</S.Th>
                        <S.Th>총 가격</S.Th>
                      </S.Tr>
                    </S.Thead>

                    {cart?.fetchProductCart?.map((el, idx) => (
                      <S.Tr id={el.id} key={el.id}>
                        <S.PrdTd>
                          <S.ImgWrap>
                            <img
                              src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                            />
                          </S.ImgWrap>
                          <S.PrdDetail>
                            <S.Name>{el.product.name}</S.Name>

                            <S.Option>
                              {`${optionName(el.product.etc1Name ?? "")}`}
                              {el.etc1Value !== "," && el.etc1Value
                                ? el.etc1Value
                                : ""}
                            </S.Option>
                            <S.Option>
                              {`${optionName(el.product.etc2Name ?? "")}`}
                              {el.etc2Value !== "," && el.etc2Value
                                ? el.etc2Value
                                : ""}
                            </S.Option>
                          </S.PrdDetail>
                        </S.PrdTd>
                        <S.Td>{el.quantity}</S.Td>
                        <S.Td>{PriceReg(String(el.product.price))}원</S.Td>
                        <S.Td>
                          {PriceReg(
                            String(
                              Number(el.quantity) * Number(el.product.price)
                            )
                          )}
                          원
                        </S.Td>
                        <S.Td>
                          {/* <S.Button id={el.id} onClick={onClickDeleteCart}>
                            삭제 ✕
                          </S.Button> */}
                        </S.Td>
                      </S.Tr>
                    ))}
                  </S.Table>
                </InfiniteScrollPage>
                {cart?.fetchProductCart?.map((el, idx) => (
                  <S.MobileList id={el.id} key={idx}>
                    <S.PrdImg>
                      <img
                        src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                      />
                    </S.PrdImg>
                    <S.PrdInfoWrap>
                      <S.PrdInfo>
                        <S.PrdName>{el.product.name}</S.PrdName>
                        <S.PrdOption>
                          {" "}
                          {optionName(el?.product.etc1Name ?? "")}
                          {el.etc1Value}
                        </S.PrdOption>
                        <S.PrdOption>
                          {optionName(el?.product.etc2Name ?? "")}
                          {el.etc2Value}
                        </S.PrdOption>
                        <S.Quantity>수량: {el.quantity}</S.Quantity>
                        <S.Price>가격: {el.product.price} 원</S.Price>
                        <S.Price>
                          총 가격:{" "}
                          {PriceReg(
                            String(
                              Number(el.quantity) * Number(el.product.price)
                            )
                          )}{" "}
                          원
                        </S.Price>
                      </S.PrdInfo>
                      {/* <S.Delete id={el.id} onClick={onClickDeleteCart}>
                        ✕
                      </S.Delete> */}
                    </S.PrdInfoWrap>
                  </S.MobileList>
                ))}
              </S.ProductWapper>
              <S.Bargan>
                <S.SubTitle>할인받기</S.SubTitle>
                <S.ShippingInfoBox>
                  <S.DiscountBox>
                    <S.DiscountInfoTitle>결제 예정금액</S.DiscountInfoTitle>
                    <S.ExpectedPrice>
                      {PriceReg(
                        String(
                          dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                        )
                      )}
                    </S.ExpectedPrice>
                    원
                  </S.DiscountBox>
                  <S.DiscountMobileBox>
                    <S.DiscountPointBox>
                      <S.DiscountInfoTitle>YORAM POINT</S.DiscountInfoTitle>
                      <S.YoramPointInput
                        type="text"
                        placeholder="0"
                        {...register("point")}
                        onChange={onChangeUsePoint}
                      />
                      <S.DeletePoint
                        type="button"
                        value="checkbox"
                        onClick={DeletePoint}
                      />
                      <S.YoramPointUnit>P</S.YoramPointUnit>{" "}
                    </S.DiscountPointBox>
                    <div>
                      <S.UsePointCheck
                        type="checkbox"
                        onClick={onClickPointTransition}
                        value="checkbox"
                      />
                      모두 사용하기
                      <S.RestPoint>
                        보유포인트: {PriceReg(user?.fetchLoginUser?.point)}P
                      </S.RestPoint>
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
                      {PriceReg(
                        String(
                          dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                        )
                      )}
                      <span>원</span>
                    </S.SumProductPrice>
                  </S.PriceBox>
                  <S.PriceBox>
                    <S.BoxTitle>YORAM POINT</S.BoxTitle>
                    <S.SumProductPrice>
                      - {getValues("point")} <span>원</span>
                    </S.SumProductPrice>
                  </S.PriceBox>
                </S.SumProductBox>
                <div>
                  <S.PriceBox>
                    <S.BoxTitle>총 결제 금액</S.BoxTitle>
                    <S.SumPrice>
                      {PriceReg(
                        String(
                          Number(
                            dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                          ) - Number(getValues("point"))
                        )
                      )}
                      <span>원</span>
                    </S.SumPrice>
                  </S.PriceBox>
                  <S.PointBox>
                    <S.PointTitle>적립예정 포인트</S.PointTitle>
                    <S.Point>
                      {PriceReg(
                        String(
                          Math.floor(
                            (Number(
                              dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                            ) -
                              Number(getValues("point"))) *
                              0.1
                          )
                        )
                      )}
                      p
                    </S.Point>
                  </S.PointBox>
                </div>
              </S.PriceWrap>
              <S.PayButton>결제하기</S.PayButton>
            </S.Right>
          </S.FlexBoxWrap>
        </S.Wrapper>
      </div>
    </>
  );
}
