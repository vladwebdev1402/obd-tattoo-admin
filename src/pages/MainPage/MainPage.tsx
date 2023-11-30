import st from "./MainPage.module.scss";
import React from "react";

const MainPage = () => {
  return (
    <div className={`container ${st.help}`}>
      Выберите таблицу, чтобы начать взаимодействие с данными
    </div>
  );
};

export default MainPage;
