import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQuerySortByCommentsAscArgs,
} from "../../../../commons/types/generated/types";

export const SORT_BY_COMMENTS_ASC = gql`
  query sortByCommentsASC($page: Float!) {
    sortByCommentsASC(page: $page) {
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

export const useCommentsASC = () => {
  const { data: CommentsASC, refetch: CommentsASCRefetch } = useQuery<
    Pick<IQuery, "sortByCommentsASC">,
    IQuerySortByCommentsAscArgs
  >(SORT_BY_COMMENTS_ASC, {
    variables: {
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });
  return { CommentsASC, CommentsASCRefetch };
};
