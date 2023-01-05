import {
  ErrorMessage,
  InputBox,
  InputWrapper,
  Label,
  NameInput,
} from "./Input01.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password";
  title: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export default function Input01(props: IProps) {
  return (
    <InputWrapper>
      <Label>{props.title}</Label>
      <InputBox>
        <NameInput
          type={props.type}
          placeholder={props.placeholder}
          {...props.register}
        />
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      </InputBox>
    </InputWrapper>
  );
}
