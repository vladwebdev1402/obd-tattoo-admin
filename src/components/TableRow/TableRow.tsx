import React, { FC } from "react";
import st from "./TableTow.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fr: number;
  isTitle?: boolean;
  onDelete?: () => void;
  onOpen?: () => void;
  isTable?: boolean;
}
const TableRow: FC<Props> = ({
  fr,
  isTitle = false,
  className,
  children,
  onDelete,
  onOpen,
  isTable = true,
  ...props
}) => {
  return (
    <div
      className={`${st.row} ${isTable ? st.row__table : st.row__block}${
        isTitle ? st.row__title : ""
      } ${className} fr-${fr}`}
      {...props}
      onClick={() => onOpen && onOpen()}
    >
      {children}
      {!isTitle && onDelete ? (
        <button
          className={st.row__delete}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete();
          }}
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TableRow;
