import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import styled, { css } from "styled-components";

interface MyInputProps {
  InputSize?: "large" | "medium" | "small";
  color?: string;
  icon?: string;
  backgroundColor?: string;
}

const MyInput = styled.input<MyInputProps>`
  ${(props) => {
    switch (props.color) {
      case "white":
        return css`
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        `;
      case "black":
        return css`
          color: #000;
          &::placeholder {
            color: #000;
          }
        `;
      default:
        return css`
          color: #000;
          &::placeholder {
            color: #000;
          }
        `;
    }
  }}
  height: 50px;
  width: 100%;
  line-height: 1.42857;
  color: #fff;
  border: none;
  outline: none;
  /* border-radius: 10px; */
  margin-bottom: 0;
  background-color: transparent;
  vertical-align: middle;
  font-size: 16px;
  transition: border 0.2s;

  &::placeholder {
    transition: color 0.5s;
    color: rgba(255, 255, 255, 0.2);
    font-weight: 400;
  }
  &:focus::placeholder {
    color: rgba(255, 255, 255, 1);
  }
`;
interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  InputSize?: "large" | "medium" | "small";
  value: string;
  type?: "default" | "price" | HTMLInputTypeAttribute | "password";
  placeholder?: string;
  id?: string;
  color: "black" | "white";
  icon?: string;
  backgroundColor?: string;
  className?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    color = "black",
    id,
    icon,
    onChange,
    InputSize = "medium",
    value,
    type = "text",
    placeholder,
    backgroundColor,
    className,
  } = props;
  return (
    <>
      <MyInput
        backgroundColor={backgroundColor}
        icon={icon}
        id={id}
        className={className}
        color={color}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        InputSize={InputSize}
        value={value}
      />
    </>
  );
};
export default Input;
