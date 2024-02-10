"use client";

import { useAuthStore } from "@/shared/zustand/useAuthStore";
import { AuthButton } from "../ui/AuthButton/AuthButton";
import { AuthInput } from "../ui/AuthInput/AuthInput";
import { useRouter } from "next/navigation";

import cls from "./RegistrationForm.module.scss";
import { openAlert } from "@/shared/zustand/useAlertStore";

export const RegistrationForm = () => {
  const {
    name,
    handleName,
    password,
    handlePassword,
    repeatPassword,
    handleRepeatPassword,
    register,
  } = useAuthStore();

  const router = useRouter();

  const registerHandler = async () => {
    if (name.length > 3 && password.length > 3) {
      const result = await register();
      if (result) router.push("/auth/login");
    } else openAlert("warning", "Минимальная длина всех полей - 4 символа");
  };

  const redirectToLogin = () => router.push("login");

  return (
    <div className={cls.container}>
      <div className={cls.title}>Вход</div>

      <AuthInput
        type="text"
        placeholder="Имя"
        value={name}
        handleValue={(value) => handleName(value)}
      />

      <AuthInput
        type="password"
        placeholder="Пароль"
        value={password}
        handleValue={(value) => handlePassword(value)}
      />
      <AuthInput
        type="password"
        placeholder="Повторите пароль"
        value={repeatPassword}
        handleValue={(value) => handleRepeatPassword(value)}
      />

      <div onClick={redirectToLogin} className={cls.link}>
        Зарегестрированы? Вход
      </div>
      <AuthButton onClick={registerHandler}>Зарегестрироваться</AuthButton>
    </div>
  );
};
