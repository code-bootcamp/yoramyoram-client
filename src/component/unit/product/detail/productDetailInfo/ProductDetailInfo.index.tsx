import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "./ProductDetailInfo.styles";
import { FETCH_PRODUCT } from "../../../../commons/hooks/queries/useFetchProduct";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
//
export default function ProductDetailInfo() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  return (
    <S.Wrapper>
      <S.ProductImg src="/productDetail/purchase.png" alt="상품이미지" />
      <S.ProductInfoBox>
        <S.ProductInfo>
          패키지 FREE! 100% 천연 소재로 만든 파우치 입니다. 생분해 되어 흙으로
          돌아가며 환경호르몬 걱정 없이 안심하고 사용할 수 있어요.
        </S.ProductInfo>

        <S.CautionText>
          <div>
            <LeftOutlined />
            주의 사항
            <RightOutlined />
          </div>
          <div>
            * 천연 소재로 제조하기 때문에 가루가 발생하기도 합니다. 인체에
            무해하니 안심하고 사용해 주세요.
          </div>
          <div>
            * 삶아서 사용하실 경우, 60~70도의 물에서 잠깐 삶아주세요. 천연 소재
            특성 상 60-70도 이상의 고온에서 삶을 경우 부식 되거나 모양 및 색상
            변질이 발생할 수 있습니다.
          </div>
        </S.CautionText>
      </S.ProductInfoBox>
    </S.Wrapper>
  );
}
