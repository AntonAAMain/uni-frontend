import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import cls from "./Bottom.module.scss";

export const Bottom = () => {
  const { mode } = useProfilePostModalStore();

  return (
    <div className={cls.container}>
      {mode === "edit" && (
        <>
          <div>likes</div>

          <div>dislikes</div>

          <div>date</div>
        </>
      )}

      <div className={cls.button}>
        {mode === "create" ? "Создать" : "Изменить"}
      </div>
    </div>
  );
};
