import React, { useState } from "react";
import st from "./SignPage.module.scss";
import Input from "@/UI/input/Input";
import ClipButton from "@/UI/button/ClipButton/ClipButton";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthStore from "@/store/AuthStore/AuthStore";
const SignPage = observer(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
  };

  const signup = async () => {
    await AuthStore.signup(login, password, repeatPassword);
    if (AuthStore.successfully) {
      AuthStore.clear();
      navigate("/");
    }
  };

  return (
    <div className={st.signup}>
      <div className={st.signup__header}>Регистрация</div>
      <form className={st.signup__form} onSubmit={formSubmit}>
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
        <Input
          type="password"
          value={repeatPassword}
          title="Повторить пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRepeatPassword(e.target.value);
          }}
        />

        <ClipButton
          className={st.signup__btn}
          onClick={() => signup()}
          theme="dark"
        >
          Зарегистрироваться
        </ClipButton>
      </form>
      <div className={st.signup__footer}>
        Зарегистрированы? <Link to="/">Авторизоваться</Link>
      </div>
      {AuthStore.message && (
        <div className={st.signup__message}>{AuthStore.message}</div>
      )}
    </div>
  );
});

export default SignPage;
