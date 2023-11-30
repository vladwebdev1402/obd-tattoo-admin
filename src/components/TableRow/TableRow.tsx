import React, { FC } from "react";
import st from "./TableTow.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fr: number;
  isTitle?: boolean;
  onDelete?: () => void;
  onOpen?: () => void;
}
const TableRow: FC<Props> = ({
  fr,
  isTitle = false,
  className,
  children,
  onDelete,
  onOpen,
  ...props
}) => {
  return (
    <div
      className={`${st.row} ${
        isTitle ? st.row__title : ""
      } ${className} fr-${fr}`}
      {...props}
      onClick={() => onOpen && onOpen()}
    >
      {children}
      {!isTitle ? (
        <button
          className={st.row__delete}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete && onDelete();
          }}
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TableRow;
