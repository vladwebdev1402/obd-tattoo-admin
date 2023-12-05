import React, { FC } from "react";
import st from "./ItemBlock.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  classNameBody?: string;
}
const ItemBlock: FC<Props> = ({
  title,
  children,
  classNameBody = "",
  ...props
}) => {
  return (
    <div {...props}>
      <div className={st.block__title}>{title}</div>
      <div className={`${st.block__body} ${classNameBody}`}>{children}</div>
    </div>
  );
};

export default ItemBlock;
