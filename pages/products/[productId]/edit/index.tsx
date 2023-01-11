import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../src/commons/types/generated/types";
import { FETCH_PRODUCT } from "../../../../src/component/commons/hooks/queries/useFetchProduct";
import ProductWrite from "../../../../src/component/unit/product/write/ProductWrite.index";

export default function EditProductPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
