import { InputWrapper, Label, NameInput } from "./Input01.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password";
  title: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return (
    <InputWrapper>
      <Label>{props.title}</Label>
      <NameInput
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </InputWrapper>
  );
}
