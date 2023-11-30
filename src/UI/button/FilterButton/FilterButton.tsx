import React, { FC } from "react";
import st from "./FilterButton.module.scss";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
const FilterButton: FC<Props> = ({
  children,
  active = false,
  className = "",
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`${st.btn} ${active && st.active} ${className}`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
