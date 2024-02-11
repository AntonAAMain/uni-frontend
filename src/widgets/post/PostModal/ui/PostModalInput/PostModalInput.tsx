import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import cls from "./PostModalInput.module.scss";

export const PostModalInput = () => {
  const { title, handleTitle } = useProfilePostModalStore();

  return (
    <input
      value={title}
      onChange={(e) => handleTitle(e.target.value)}
      placeholder="Заголовок поста"
      className={cls.input}
      type="text"
    />
  );
};
