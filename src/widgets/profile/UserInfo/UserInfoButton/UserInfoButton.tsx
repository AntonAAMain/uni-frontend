"use client";

import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";

import cls from "./UserInfoButton.module.scss";

export const UserInfoButton = () => {
  const { setIsActive } = useProfilePostModalStore();

  const open = () => {
    setIsActive(true);
  };

  return (
    <div onClick={open} className={cls.container}>
      Создать пост
    </div>
  );
};
