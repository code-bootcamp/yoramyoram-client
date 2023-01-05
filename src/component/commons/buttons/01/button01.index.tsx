import styled from "@emotion/styled";
import { DEFAULT_COLOR } from "../../../../commons/styles/defalutType";

interface IButtonProps {
  title: string;
  bgColor?: string;
  fontColor?: string;
  size?: string;
  radius?: string;
}
interface IButtonStylesProps {
  bgColor?: string;
  fontColor?: string;
  size?: string;
  radius?: string;
}

export default function Button01(props: IButtonProps) {
  return (
    <Button
      size={props.size}
      fontColor={props.fontColor}
      bgColor={props.bgColor}
      radius={props.radius}
    >
      {props.title}
    </Button>
  );
}

const Button = styled.button<IButtonStylesProps>`
  border: 0 none;
  width: 100%;
  border: 1px solid ${DEFAULT_COLOR["red"]};
  max-width: ${(props) => (props.size ? props.size : "100px")};
  background-color: ${(props) =>
    props.bgColor ? DEFAULT_COLOR[props.bgColor] : "#000000"};
  color: ${(props) =>
    props.fontColor ? DEFAULT_COLOR[props.fontColor] : "#000000"};
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
`;
