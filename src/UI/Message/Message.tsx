import React, { FC } from "react";
import st from "./Message.module.scss";
interface Props {
  children: React.ReactNode;
}
const Message: FC<Props> = ({ children }) => {
  return <div className={st.message}>{children}</div>;
};

export default Message;
