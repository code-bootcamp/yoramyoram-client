import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_CART = gql`
  query fetchProductCart {
    fetchProductCart {
      id
      quantity
      user {
        name
      }
      product {
        name
        price
        etc1Name
        etc1Value
        etc2Name
        etc2Value
      }
    }
  }
`;

export const useFetchProductCart = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchProductCart">>(FETCH_PRODUCTS_CART);
  return { data };
};
