import cn from "classnames";
import { UserInfoButton } from "./UserInfoButton/UserInfoButton";
import { useEffect } from "react";

import cls from "./UserInfo.module.scss";
import { nameLolalstorage } from "@/shared/consts";
import { apiBase } from "@/shared/http";
import { useUserStore } from "@/shared/zustand/useUserStore";

export const UserInfo = () => {
  const { fetchUser, user, postsLength } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.info}>
        <p>{user?.name}</p>
        <p>Зарегался {user?.register_date.slice(0, 10)}</p>
        <p>Постов {postsLength} шт</p>
      </div>

      <UserInfoButton />
    </div>
  );
};
