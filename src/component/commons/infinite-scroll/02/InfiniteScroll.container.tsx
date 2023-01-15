import InfiniteScrollUI from "./InfiniteScroll.presenter";

export default function InfiniteScrollPage(props) {
  // const { data, fetchMore } = useQuery<
  //   Pick<IQuery, "fetchBoardComments">,
  //   IQueryFetchBoardArgs
  // >(FETCH_COMMENTS);
  const onLoadMore = async () => {
    if (props.data === undefined) return;
    if (props.data?.fetchmyWishlist === undefined) return;

    console.log(
      "props.data?.fetchProductCart.length",
      Math.ceil(props.data?.fetchmyWishlist.length / 5)
    );
    await props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchmyWishlist.length / 5) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log("fetchMoreResult", fetchMoreResult);
        if (fetchMoreResult.fetchmyWishlist === undefined) {
          console.log(prev, fetchMoreResult);
          return {
            fetchmyWishlist: [...prev.fetchmyWishlist],
          };
        }
        return {
          fetchmyWishlist: [
            ...prev.fetchmyWishlist,
            ...fetchMoreResult?.fetchmyWishlist,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScrollUI onLoadMore={onLoadMore}>
      {props.children}
    </InfiniteScrollUI>
  );
}
