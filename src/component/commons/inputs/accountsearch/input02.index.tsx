import { Label, SearchInput, SearchWrapper } from "./input02.styles";

interface IProps {
  type: "text" | "password";
  title: string;
}

export default function Input02(props: IProps) {
  return (
    <>
      <SearchWrapper>
        <Label>{props.title}</Label>
        <SearchInput type={props.type} />
      </SearchWrapper>
    </>
  );
}
