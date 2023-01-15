import { gql, useQuery } from "@apollo/client";

const FETCH_USER_POINT = gql`
  query fetchUserPoint {
    fetchUserPoint {
      id
      name
      point
      amount
      role
    }
  }
`;

export const useFetchUserPoint = () => {
  const { data } = useQuery(FETCH_USER_POINT);
  return { data };
};
