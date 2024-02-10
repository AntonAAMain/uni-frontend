import { useAuthStore } from "@/shared/zustand/useAuthStore";
import { AuthButton } from "../ui/AuthButton/AuthButton";
import { AuthInput } from "../ui/AuthInput/AuthInput";
import { openAlert, useAlertStore } from "@/shared/zustand/useAlertStore";
import { useRouter } from "next/navigation";

import cls from "./LoginForm.module.scss";

export const LoginForm = () => {
  const { name, handleName, password, handlePassword, login } = useAuthStore();

  const router = useRouter();

  const buttonHandler = async () => {
    const result = await login();

    if (result) router.push("/");
  };

  const redirectToRegister = () => router.push("register");

  return (
    <div className={cls.container}>
      <div
        onClick={() => openAlert("success", "hello 2")}
        className={cls.title}
      >
        Вход
      </div>

      <AuthInput
        type="text"
        value={name}
        handleValue={(value) => handleName(value)}
      />
      <AuthInput
        type="password"
        value={password}
        handleValue={(value) => handlePassword(value)}
      />

      <div onClick={redirectToRegister} className={cls.link}>
        Не зарегестрированы?
      </div>
      <AuthButton onClick={buttonHandler}>Войти</AuthButton>
    </div>
  );
};
