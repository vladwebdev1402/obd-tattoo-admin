import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";

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
      className={`${className}`}
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
