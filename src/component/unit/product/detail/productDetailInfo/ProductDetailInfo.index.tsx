import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "./ProductDetailInfo.styles";
import { FETCH_PRODUCT } from "../../../../commons/hooks/queries/useFetchProduct";
import { useQuery } from "@apollo/client";
import Dompurify from "dompurify";
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
      <S.ProductInfoBox>
        {typeof window !== "undefined" && (
          <S.ProductInfo
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(data?.fetchProduct.detailContent)
              ),
            }}
          ></S.ProductInfo>
        )}
        <img src="/det1.png" />
        <img src="/det2.png" />
        <img src="/det3.png" />
        <img src="/det4.png" />
        <img src="/det5.png" />
      </S.ProductInfoBox>
    </S.Wrapper>
  );
}
