import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";

import cls from "./Top.module.scss";

export const Top = () => {
  const { mode } = useProfilePostModalStore();

  return (
    <div className={cls.container}>
      {mode === "create"
        ? "Создание поста"
        : mode === "view"
        ? "Просмотр поста"
        : `Изменение поста`}
    </div>
  );
};
