import React, { FC, useEffect, useRef, useState } from "react";
import st from "./CategoryOperation.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  contanerRef?: React.RefObject<HTMLDivElement>;
}
const CategoryOperation: FC<Props> = ({
  className = "",
  children,
  title,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) ref.current!.style.height = `${ref.current!.scrollHeight}px`;
    else ref.current!.style.height = "0";
  }, [open]);
  return (
    <div
      className={`${st.category} ${className} ${open ? st.category_open : ""}`}
      {...props}
    >
      <h1 className={st.category__head} onClick={() => setOpen(!open)}>
        {title}
      </h1>
      <div className={`${st.categoty__body}`} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default CategoryOperation;
