import React, { FC } from "react";
import st from "./Textarea.module.scss";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
}
const Textarea: FC<Props> = ({ className = "", title, ...props }) => {
  return (
    <div className={`${st.textareaContainer} ${className}`}>
      <div className={st.textareaName}>{title}</div>
      <textarea className={st.textarea} {...props} />
    </div>
  );
};

export default Textarea;
