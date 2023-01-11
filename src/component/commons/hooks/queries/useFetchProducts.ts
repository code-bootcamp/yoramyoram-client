import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($cateId: String, $page: Float!) {
    fetchProducts(cateId: $cateId, page: $page) {
      product_id
      name
      price
      description
      commentCount
      wishListCount
      etc1Name
      etc1Value
      etc2Name
      etc2Value
      detailContent
      productImages {
        productImage_id
        url
      }
    }
  }
`;

export const FETCH_PRODUCTS_COUNT = gql`
  query {
    fetchProductsCount
  }
`;
export const useFetchProducts = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables: {
      page: 1,
      cateId:''
    },
  });

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const refetchCategory = (cateId : string) => {
    void refetch({ page: 1 , cateId: cateId });
  };

  return {
    data,
    refetch,
    onClickPage,
    refetchCategory
  };
};
