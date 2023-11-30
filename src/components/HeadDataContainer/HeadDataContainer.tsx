import React, { FC } from "react";
import st from "./HeadDataContainer.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const HeadDataContainer: FC<Props> = ({ ...props }) => {
  return (
    <div className={st.container}>
      <h1>Данные</h1>
      <input type="text" className={`${st.myInput}`} {...props} />
    </div>
  );
};

export default HeadDataContainer;
