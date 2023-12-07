import React from "react";
import st from "./AuthRoot.module.scss";
import { Outlet } from "react-router-dom";
const AuthRoot = () => {
  return (
    <div className={`container ${st.auth__root}`}>
      <h1>Пройдите аутентификацию</h1>
      <Outlet />
    </div>
  );
};

export default AuthRoot;
