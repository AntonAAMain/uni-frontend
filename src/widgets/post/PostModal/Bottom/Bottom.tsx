import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import cls from "./Bottom.module.scss";
import { apiBase } from "@/shared/http";

export const Bottom = () => {
  const { mode, text, submitHandle } = useProfilePostModalStore();

  return (
    <div className={cls.container}>
      <div onClick={submitHandle} className={cls.button}>
        {mode === "create" ? "Создать" : "Изменить"}
      </div>
    </div>
  );
};
