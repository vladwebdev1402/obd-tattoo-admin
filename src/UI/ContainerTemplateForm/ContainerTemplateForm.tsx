import React, { FC } from "react";
import st from "./ContainerTemplateForm.module.scss";
interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onEvent?: () => void;
}

const ContainerTemplateForm: FC<Props> = ({
  onEvent = () => {},
  children,
  className,
  ...props
}) => {
  return (
    <form
      className={`${className} ${st.form}`}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onEvent();
      }}
      {...props}
    >
      {children}
    </form>
  );
};

export default ContainerTemplateForm;
