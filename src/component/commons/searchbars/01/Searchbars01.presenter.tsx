import {
  SearchBoxMobile,
  SearchInput,
  SearchOutline,
} from "./Searchbars01.styles";

export default function Searchbar01UI() {
  return (
    <SearchBoxMobile>
      <SearchInput type="text" placeholder="검색" />
      <SearchOutline></SearchOutline>
    </SearchBoxMobile>
  );
}
