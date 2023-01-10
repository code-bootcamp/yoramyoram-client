import _ from "lodash";
import Searchbar01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((value: string) => {});

  return <Searchbar01UI />;
}
