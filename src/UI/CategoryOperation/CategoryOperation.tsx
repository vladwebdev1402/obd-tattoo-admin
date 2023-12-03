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
  const [open, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  var observer = new window.ResizeObserver(() => {
    if (ref.current)
      ref.current.style.height = `${ref.current!.scrollHeight}px`;
  });

  useEffect(() => {
    if (open) ref.current!.style.height = `${ref.current!.scrollHeight}px`;
    else ref.current!.style.height = "0";
  }, [open]);

  useEffect(() => {
    if (refContent.current) observer.observe(refContent.current);
  }, [refContent]);
  return (
    <div
      className={`${st.category} ${className} ${open ? st.category_open : ""}`}
      {...props}
    >
      <h1 className={st.category__head} onClick={() => setOpen(!open)}>
        {title}
      </h1>
      <div className={`${st.categoty__body}`} ref={ref}>
        <div className={st.category__content} ref={refContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryOperation;
