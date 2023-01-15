import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQuerySortByCommentsDescArgs,
} from "../../../../commons/types/generated/types";

export const SORT_BY_COMMENTS_DESC = gql`
  query sortByCommentsDESC($page: Float!) {
    sortByCommentsDESC(page: $page) {
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

export const useCommentsDESC = () => {
  const { data: CommentsDESC, refetch: CommentsDESCRefetch } = useQuery<
    Pick<IQuery, "sortByCommentsDESC">,
    IQuerySortByCommentsDescArgs
  >(SORT_BY_COMMENTS_DESC, {
    variables: {
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });
  return { CommentsDESC, CommentsDESCRefetch };
};
