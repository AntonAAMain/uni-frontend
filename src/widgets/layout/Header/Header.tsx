import cn from "classnames";

import cls from "./Header.module.scss";
import Link from "next/link";
import { nameLolalstorage } from "@/shared/consts";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const quit = () => {
    localStorage.removeItem(nameLolalstorage);
    router.push("/auth/login");
  };

  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.list}>
        <div onClick={quit} className={cls.item}>
          Выйти
        </div>
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
