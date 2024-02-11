"use client";

import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";

import cls from "./UserInfoButton.module.scss";

export const UserInfoButton = () => {
  const { setIsActive, setMode, handleText, handleTitle } =
    useProfilePostModalStore();

  const open = () => {
    handleText("");
    handleTitle("");
    setMode("create");
    setIsActive(true);
  };

  return (
    <div onClick={open} className={cls.container}>
      Создать пост
    </div>
  );
};
