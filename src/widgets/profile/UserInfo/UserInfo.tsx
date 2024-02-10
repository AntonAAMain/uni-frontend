import cn from "classnames";

import cls from "./UserInfo.module.scss";
import { UserInfoButton } from "./UserInfoButton/UserInfoButton";

export const UserInfo = () => {
  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.info}>
        <p>Антон</p>
        <p>Зарегался 12.02.2024</p>
        <p>Постов 102 штуки</p>
      </div>

      <UserInfoButton />
    </div>
  );
};
