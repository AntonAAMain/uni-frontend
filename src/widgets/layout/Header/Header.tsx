import cn from "classnames";

import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.list}>
        <div className={cls.item}>Header</div>
        <div className={cls.item}>Общая лента</div>
        <div className={cls.item}>Моя лента</div>
      </div>
    </div>
  );
};
