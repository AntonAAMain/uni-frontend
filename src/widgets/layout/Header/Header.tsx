import cn from "classnames";

import cls from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.list}>
        <div className={cls.item}>Header</div>
        <Link href={"/"}>
          <div className={cls.item}>Общая лента</div>
        </Link>
        <Link href={"/profile"}>
          <div className={cls.item}>Моя лента</div>
        </Link>
      </div>
    </div>
  );
};
