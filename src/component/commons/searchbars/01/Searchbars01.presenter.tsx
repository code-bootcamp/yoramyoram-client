import {
  SearchBoxMobile,
  SearchOutline,
} from "../../../unit/product/List/ProductList.styles";
import { SearchInput } from "../../inputs/accountsearch/input02.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <SearchBoxMobile>
      <SearchInput
        placeholder="검색어를 입력해주세요"
        onChange={props.onChangeSearchbar}
      />
      <SearchOutline />
    </SearchBoxMobile>
  );
}
