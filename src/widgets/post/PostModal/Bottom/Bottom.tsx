import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import cls from "./Bottom.module.scss";
import { apiBase } from "@/shared/http";
import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";

export const Bottom = () => {
  const { mode, text, submitHandle, deletePost } = useProfilePostModalStore();

  const { mode: postsMode } = useProfilePosts();

  return (
    <div className={cls.container}>
      <div onClick={submitHandle} className={cls.button}>
        {mode === "create" ? "Создать" : "Изменить"}
      </div>

      {mode === "edit" && (
        <div onClick={deletePost} className={cls.button}>
          Удалить
        </div>
      )}
    </div>
  );
};
