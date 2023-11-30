import React, { FC } from "react";
import st from "./Input.module.scss";

interface MyInputProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<MyInputProps> = ({
  title,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`${st.inputContainer} ${className}`}>
      <div className={st.inputName}>{title}</div>
      <input
        className={st.input}
        {...props}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
