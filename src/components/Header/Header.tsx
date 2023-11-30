import React, { FC } from "react";
import st from "./Hedaer.module.scss";
interface Props {
  className?: string;
}
const Header: FC<Props> = ({ className = "" }) => {
  return (
    <div className={`${className} ${st.header}`}>Mr. Driskel Admin Panel</div>
  );
};

export default Header;
