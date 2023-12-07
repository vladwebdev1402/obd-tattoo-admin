import React from "react";
import st from "./ErrorPage.module.scss";
const ErrorPage = () => {
  return (
    <section className={`conrainer ${st.error}`}>Страница не найдена</section>
  );
};

export default ErrorPage;
