import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";

import cls from "./PostModalText.module.scss";

export const PostModalText = () => {
  const { text, handleText } = useProfilePostModalStore();

  return (
    <textarea
      value={text.split("\\n").join("\n")}
      onChange={(e) => handleText(e.target.value)}
      placeholder="Текст поста"
      className={cls.textarea}
      name=""
      id=""
    ></textarea>
  );
};
