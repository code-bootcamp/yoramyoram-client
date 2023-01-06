import { UseFormRegisterReturn } from "react-hook-form";
import { Label, SearchInput, SearchWrapper } from "./input02.styles";

interface IProps {
  type: "text" | "password";
  title: string;
  register: UseFormRegisterReturn;
}

export default function Input02(props: IProps) {
  return (
    <>
      <SearchWrapper>
        <Label>{props.title}</Label>
        <SearchInput {...props.register} type={props.type} />
      </SearchWrapper>
    </>
  );
}
