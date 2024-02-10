"use client";

import { useEffect } from "react";
import { useAlertStore } from "@/shared/zustand/useAlertStore";
import cn from "classnames";

import cls from "./Alert.module.scss";

export const Alert = () => {
  const { closeAlert, isActive, type, text } = useAlertStore();

  useEffect(() => {
    if (isActive)
      setTimeout(() => {
        closeAlert();
      }, 2000);
  }, [isActive, closeAlert]);

  return (
    <div
      className={cn(cls.container, {
        [cls.container_active]: isActive,
        [cls.container_success]: type === "success",
        [cls.container_warning]: type === "warning",
        [cls.container_dangerous]: type === "dangerous",
      })}
    >
      {text}
    </div>
  );
};
