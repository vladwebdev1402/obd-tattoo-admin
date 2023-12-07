import React, { useState } from "react";
import st from "./LoginPage.module.scss";
import Input from "@/UI/input/Input";
import ClipButton from "@/UI/button/ClipButton/ClipButton";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import AuthStore from "@/store/AuthStore/AuthStore";
const LoginPage = observer(() => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginClick();
  };

  const loginClick = async () => {
    await AuthStore.login(login, password);
  };

  return (
    <div className={st.login}>
      <div className={st.login__header}>Авторизация</div>
      <form className={st.login__form} onSubmit={formSubmit}>
        <Input
          value={login}
          title="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLogin(e.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          title="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <ClipButton
          className={st.login__btn}
          onClick={() => loginClick()}
          theme="dark"
        >
          Войти
        </ClipButton>
      </form>
      <div className={st.login__footer}>
        Не зарегистрированы? <Link to="signup">Зарегистрироваться</Link>
      </div>
      {AuthStore.message && (
        <div className={st.login__message}>{AuthStore.message}</div>
      )}
    </div>
  );
});

export default LoginPage;
