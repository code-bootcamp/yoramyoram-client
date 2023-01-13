import * as S from "./Pagination01.styles";

interface IProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: any;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export default function Pagination01UI(props: IProps) {
  return (
    <S.PaginationBox>
      <S.Page
        onClick={props.onClickPrevPage}
        disabled={props.startPage == 1}
        style={{ cursor: "pointer" }}
      >
        &#5176;
      </S.Page>
      {new Array(5).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.PageNum
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              style={{ cursor: "pointer" }}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.PageNum>
          )
      )}
      <S.Page
        onClick={props.onClickNextPage}
        disabled={props.startPage + 5 > props.lastPage}
        style={{ cursor: "pointer" }}
      >
        &#5171;
      </S.Page>
    </S.PaginationBox>
  );
}
